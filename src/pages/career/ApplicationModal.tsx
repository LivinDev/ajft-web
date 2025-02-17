// ApplicationModal.tsx
import React, { useState } from 'react';
import styles from './CareerPage.module.css';

interface JobPosting {
  id: string;
  title: string;
}

interface ApplicationFormData {
  role: {
    title: string;
  };
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    address: string;
  };
  professionalInfo: {
    experience: number;
    noticePeriod: string;
  };
}

interface ApplicationModalProps {
  job: JobPosting;
  onClose: () => void;
  onSubmit: (formData: ApplicationFormData) => void;
}

const ApplicationModal: React.FC<ApplicationModalProps> = ({ job, onClose, onSubmit }) => {
  const [formData, setFormData] = useState<ApplicationFormData>({
    role: {
      title: job.title,
    },
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      address: '',
    },
    professionalInfo: {
      experience: 0,
      noticePeriod: '',
    }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      onSubmit(formData);
    } catch (error) {
      console.error('Error submitting application:', error);
    }
  };

  const updatePersonalInfo = (field: keyof ApplicationFormData['personalInfo'], value: string) => {
    setFormData({
      ...formData,
      personalInfo: {
        ...formData.personalInfo,
        [field]: value
      }
    });
  };

  const updateProfessionalInfo = (field: keyof ApplicationFormData['professionalInfo'], value: string | number) => {
    setFormData({
      ...formData,
      professionalInfo: {
        ...formData.professionalInfo,
        [field]: value
      }
    });
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
          {/* Personal Information */}
          <div className={styles.formSection}>
            <h3 className={styles.sectionTitle}>Personal Information</h3>
            
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>First Name</label>
                <input
                  type="text"
                  value={formData.personalInfo.firstName}
                  onChange={(e) => updatePersonalInfo('firstName', e.target.value)}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label>Last Name</label>
                <input
                  type="text"
                  value={formData.personalInfo.lastName}
                  onChange={(e) => updatePersonalInfo('lastName', e.target.value)}
                  required
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Email</label>
                <input
                  type="email"
                  value={formData.personalInfo.email}
                  onChange={(e) => updatePersonalInfo('email', e.target.value)}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label>Mobile</label>
                <input
                  type="tel"
                  value={formData.personalInfo.mobile}
                  onChange={(e) => updatePersonalInfo('mobile', e.target.value)}
                  pattern="[0-9]{10}"
                  title="Please enter a valid 10-digit mobile number"
                  required
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label>Address</label>
              <textarea
                value={formData.personalInfo.address}
                onChange={(e) => updatePersonalInfo('address', e.target.value)}
                required
                rows={3}
              />
            </div>
          </div>

          {/* Professional Information */}
          <div className={styles.formSection}>
            <h3 className={styles.sectionTitle}>Professional Information</h3>
            
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Years of Experience</label>
                <input
                  type="number"
                  min="0"
                  max="50"
                  value={formData.professionalInfo.experience}
                  onChange={(e) => updateProfessionalInfo('experience', parseInt(e.target.value))}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label>Notice Period</label>
                <input
                  type="text"
                  value={formData.professionalInfo.noticePeriod}
                  onChange={(e) => updateProfessionalInfo('noticePeriod', e.target.value)}
                  placeholder="e.g., 2 months"
                  required
                />
              </div>
            </div>
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