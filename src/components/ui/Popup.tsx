import React, { useEffect, useState } from 'react';
import { Check, X } from 'lucide-react';
import styles from '../../styles/ui/popup.module.css';

interface StyledNotificationProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'success' | 'error';
  autoCloseDelay?: number;
}

const StyledNotification: React.FC<StyledNotificationProps> = ({
  isOpen,
  onClose,
  type,
  autoCloseDelay = 3000
}) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (isOpen && autoCloseDelay) {
      const timer = setTimeout(() => {
        handleClose();
      }, autoCloseDelay);

      return () => clearTimeout(timer);
    }
  }, [isOpen, autoCloseDelay]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsExiting(false);
      onClose();
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div 
        className={`${styles.notification} ${styles[type]} ${isExiting ? styles.exit : ''}`}
      >
        <div className={styles.iconWrapper}>
          {type === 'success' ? (
            <Check className={styles.icon} size={24} />
          ) : (
            <X className={styles.icon} size={24} />
          )}
        </div>
        
        <h3 className={styles.title}>
          {type === 'success' ? 'Yeah!' : 'Oh no!'}
        </h3>
        
        <p className={styles.message}>
          {type === 'success' 
            ? 'Message sent successfully!' 
            : 'Something went wrong.'}
        </p>
        
        <button 
          onClick={handleClose}
          className={styles.button}
        >
          {type === 'success' ? 'Done' : 'Try Again'}
        </button>
      </div>
    </div>
  );
};

export default StyledNotification;