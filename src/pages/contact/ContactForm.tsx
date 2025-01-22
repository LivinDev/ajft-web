
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import styles from './style.module.css';

const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  number: z
    .string()
    .regex(/^\d+$/, 'Number must be digits only')
    .min(10, 'Number must be at least 10 digits'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(1, 'Message is required'),
});

type FormSchema = z.infer<typeof formSchema>;

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormSchema) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>
          Name
        </label>
        <input
          id="name"
          {...register('name')}
          placeholder="John Doe"
          className={styles.input}
        />
        {errors.name && (
          <p className={styles.errorMessage}>{errors.name.message}</p>
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
          className={styles.input}
        />
        {errors.number && (
          <p className={styles.errorMessage}>{errors.number.message}</p>
        )}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          id="email"
          {...register('email')}
          placeholder="user@gmail.com"
          className={styles.input}
        />
        {errors.email && (
          <p className={styles.errorMessage}>{errors.email.message}</p>
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
          className={styles.textarea}
        />
        {errors.message && (
          <p className={styles.errorMessage}>{errors.message.message}</p>
        )}
      </div>

      <button type="submit" className={styles.submitButton}>
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
