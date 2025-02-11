// ApplicationModal.tsx
import React, { useState } from 'react';
import styles from './CareerPage.module.css';

interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Volunteer';
  experience: string;
  salary?: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  skills: string[];
  benefits: string[];
  postedDate: string;
  lastDate: string;
  category: 'Programs' | 'Administration' | 'Fundraising' | 'Operations' | 'Healthcare' | 'Education';
}

interface ApplicationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  experience: string;
  resume: File | null;
  coverLetter: string;
  referral: string;
}

interface ApplicationModalProps {
  job: JobPosting;
  onClose: () => void;
  onSubmit: (formData: ApplicationFormData) => void;
}

const ApplicationModal: React.FC<ApplicationModalProps> = ({ job, onClose, onSubmit }) => {
  const [formData, setFormData] = useState<ApplicationFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    experience: '',
    resume: null,
    coverLetter: '',
    referral: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <button 
          className={styles.closeButton}
          onClick={onClose}
        >
          ×
        </button>
        <h2>Apply for {job.title}</h2>
        
        <form onSubmit={handleSubmit} className={styles.applicationForm}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>First Name</label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label>Last Name</label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                required
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label>Phone</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label>Years of Experience</label>
            <input
              type="text"
              value={formData.experience}
              onChange={(e) => setFormData({...formData, experience: e.target.value})}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Resume</label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => setFormData({
                ...formData,
                resume: e.target.files ? e.target.files[0] : null
              })}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Cover Letter</label>
            <textarea
              value={formData.coverLetter}
              onChange={(e) => setFormData({...formData, coverLetter: e.target.value})}
              required
              rows={5}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Referral Source (Optional)</label>
            <input
              type="text"
              value={formData.referral}
              onChange={(e) => setFormData({...formData, referral: e.target.value})}
              placeholder="How did you hear about us?"
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplicationModal;