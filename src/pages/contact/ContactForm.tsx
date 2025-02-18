import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import styles from './style.module.css';
import StyledNotification from '../../components/ui/Popup';
import axios from 'axios';
const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  number: z
    .string()
    .regex(/^\d+$/, 'Number must be digits only')
    .min(10, 'Number must be at least 10 digits'),
  email: z.string().email('Invalid email address'),
  message: z.string().optional(),
});

type FormSchema = z.infer<typeof formSchema>;

// interface SubmitStatus {
//   type: 'success' | 'error' | null;
//   message: string;
//   title?: string;
// }

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
 const [showNotification, setShowNotification] = useState(false);
  const [notificationType, setNotificationType] = useState<'success' | 'error'>('success');
  

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

const onSubmit = async (data: FormSchema) => {
  setIsSubmitting(true);

  try {
    await axios.post(
      'https://api.ajftrust.org/api/contact/submit',
      {
        name: data.name,
        email: data.email,
        mobile: data.number,
        message: data.message,
      }
    );

    setNotificationType('success');
    setShowNotification(true);
    reset();
  } catch (error) {
    console.error('Form submission error:', error);
    setNotificationType('error');
    setShowNotification(true);
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className={styles.formWrapper}>
       <StyledNotification
        isOpen={showNotification}
        onClose={() => setShowNotification(false)}
        type={notificationType}
        autoCloseDelay={3000}
      />

      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className={styles.formContainer}
        noValidate
      >
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <input
            id="name"
            {...register('name')}
            placeholder="John Doe"
            className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
            disabled={isSubmitting}
            aria-invalid={errors.name ? 'true' : 'false'}
          />
          {errors.name && (
            <p className={styles.errorMessage} role="alert">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="number" className={styles.label}>
            Number
          </label>
          <input
            id="number"
            {...register('number')}
            placeholder="9142080934"
            className={`${styles.input} ${errors.number ? styles.inputError : ''}`}
            disabled={isSubmitting}
            aria-invalid={errors.number ? 'true' : 'false'}
          />
          {errors.number && (
            <p className={styles.errorMessage} role="alert">
              {errors.number.message}
            </p>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            placeholder="user@gmail.com"
            className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
            disabled={isSubmitting}
            aria-invalid={errors.email ? 'true' : 'false'}
          />
          {errors.email && (
            <p className={styles.errorMessage} role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>
            Message
          </label>
          <textarea
            id="message"
            {...register('message')}
            rows={5}
            placeholder="Enter Your Message here"
            className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
            disabled={isSubmitting}
            aria-invalid={errors.message ? 'true' : 'false'}
          />
          {errors.message && (
            <p className={styles.errorMessage} role="alert">
              {errors.message.message}
            </p>
          )}
        </div>

        <button 
          type="submit" 
          className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''}`}
          disabled={isSubmitting}
          aria-disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;