import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import styles from './style.module.css';
import StyledNotification from '../../components/ui/Popup';


// List of Indian states
const indianStates = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
  'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
  'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
  'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu',
  'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry'
] as const;

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters long'),
  number: z.string().regex(/^[0-9]{10}$/, 'Mobile number must be exactly 10 digits'),
  email: z.string().email('Invalid email address'),
  occupation: z.string().min(2, 'Occupation must be at least 2 characters long'),
  date: z.string()
    .refine((date) => {
      const dob = new Date(date);
      const today = new Date();
      const age = today.getFullYear() - dob.getFullYear();
      return age >= 16 && age <= 100;
    }, 'Age must be between 16 and 100 years'),
  gender: z.enum(['Male', 'Female', 'Other'], {
    errorMap: () => ({ message: 'Please select a gender' })
  }),
  state: z.enum(indianStates as unknown as [string, ...string[]], {
    errorMap: () => ({ message: 'Please select a valid state' })
  }),
  city: z.string().min(2, 'City must be at least 2 characters long'),
  pin: z.string().regex(/^[1-9][0-9]{5}$/, 'Invalid PIN code'),
  street: z.string().optional(),
  message: z.string().optional()
});

type FormSchema = z.infer<typeof formSchema>;

const VolunteerForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
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
      const response = await fetch('http://ajft.ap-south-1.elasticbeanstalk.com/api/volunteer/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setNotificationType('success');
      setIsNotificationOpen(true);
      reset();
    } catch (error) {
      setNotificationType('error');
      setIsNotificationOpen(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer} noValidate>
        <div className={styles.flexrow}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>Name</label>
            <input
              id="name"
              {...register('name')}
              placeholder="John Doe"
              className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
              disabled={isSubmitting}
              aria-invalid={errors.name ? 'true' : 'false'}
            />
            {errors.name && (
              <p className={styles.errorMessage} role="alert">{errors.name.message}</p>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="number" className={styles.label}>Mobile Number</label>
            <input
              id="number"
              {...register('number')}
              placeholder="9142080934"
              className={`${styles.input} ${errors.number ? styles.inputError : ''}`}
              disabled={isSubmitting}
              aria-invalid={errors.number ? 'true' : 'false'}
            />
            {errors.number && (
              <p className={styles.errorMessage} role="alert">{errors.number.message}</p>
            )}
          </div>
        </div>

        <div className={styles.flexrow}>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input
              id="email"
              type="email"
              {...register('email')}
              placeholder="user@example.com"
              className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
              disabled={isSubmitting}
              aria-invalid={errors.email ? 'true' : 'false'}
            />
            {errors.email && (
              <p className={styles.errorMessage} role="alert">{errors.email.message}</p>
            )}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="occupation" className={styles.label}>Occupation</label>
            <input
              id="occupation"
              {...register('occupation')}
              placeholder="Your occupation"
              className={`${styles.input} ${errors.occupation ? styles.inputError : ''}`}
              disabled={isSubmitting}
              aria-invalid={errors.occupation ? 'true' : 'false'}
            />
            {errors.occupation && (
              <p className={styles.errorMessage} role="alert">{errors.occupation.message}</p>
            )}
          </div>
        </div>

        <div className={styles.flexrow}>
          <div className={styles.formGroup}>
            <label htmlFor="date" className={styles.label}>Date of Birth</label>
            <input
              type="date"
              id="date"
              {...register('date')}
              className={`${styles.input} ${errors.date ? styles.inputError : ''}`}
              disabled={isSubmitting}
              aria-invalid={errors.date ? 'true' : 'false'}
            />
            {errors.date && (
              <p className={styles.errorMessage} role="alert">{errors.date.message}</p>
            )}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="gender" className={styles.label}>Gender</label>
            <select
              id="gender"
              {...register('gender')}
              className={`${styles.select} ${errors.gender ? styles.inputError : ''}`}
              disabled={isSubmitting}
              aria-invalid={errors.gender ? 'true' : 'false'}
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && (
              <p className={styles.errorMessage} role="alert">{errors.gender.message}</p>
            )}
          </div>
        </div>

        <div className={styles.flexrow}>
          <div className={styles.formGroup}>
            <label htmlFor="state" className={styles.label}>State</label>
            <select
              id="state"
              {...register('state')}
              className={`${styles.select} ${errors.state ? styles.inputError : ''}`}
              disabled={isSubmitting}
              aria-invalid={errors.state ? 'true' : 'false'}
            >
              <option value="">Select state</option>
              {indianStates.map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
            {errors.state && (
              <p className={styles.errorMessage} role="alert">{errors.state.message}</p>
            )}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="city" className={styles.label}>City</label>
            <input
              id="city"
              {...register('city')}
              placeholder="Your city"
              className={`${styles.input} ${errors.city ? styles.inputError : ''}`}
              disabled={isSubmitting}
              aria-invalid={errors.city ? 'true' : 'false'}
            />
            {errors.city && (
              <p className={styles.errorMessage} role="alert">{errors.city.message}</p>
            )}
          </div>
        </div>

        <div className={styles.flexrow}>
          <div className={styles.formGroup}>
            <label htmlFor="pin" className={styles.label}>PIN Code</label>
            <input
              id="pin"
              {...register('pin')}
              placeholder="560001"
              className={`${styles.input} ${errors.pin ? styles.inputError : ''}`}
              disabled={isSubmitting}
              aria-invalid={errors.pin ? 'true' : 'false'}
            />
            {errors.pin && (
              <p className={styles.errorMessage} role="alert">{errors.pin.message}</p>
            )}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="street" className={styles.label}>Street (Optional)</label>
            <input
              id="street"
              {...register('street')}
              placeholder="Street address"
              className={`${styles.input} ${errors.street ? styles.inputError : ''}`}
              disabled={isSubmitting}
              aria-invalid={errors.street ? 'true' : 'false'}
            />
            {errors.street && (
              <p className={styles.errorMessage} role="alert">{errors.street.message}</p>
            )}
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>Message (Optional)</label>
          <textarea
            id="message"
            {...register('message')}
            rows={3}
            placeholder="Your message"
            className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
            disabled={isSubmitting}
            aria-invalid={errors.message ? 'true' : 'false'}
          />
          {errors.message && (
            <p className={styles.errorMessage} role="alert">{errors.message.message}</p>
          )}
        </div>

        <button 
          type="submit" 
          className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''}`}
          disabled={isSubmitting}
          aria-disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>

      <StyledNotification
        isOpen={isNotificationOpen}
        onClose={() => setIsNotificationOpen(false)}
        type={notificationType}
        autoCloseDelay={3000}
      />
    </>
  );
};

export default VolunteerForm;
