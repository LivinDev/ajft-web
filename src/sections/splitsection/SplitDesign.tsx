// SplitSection.tsx
import React from 'react';
import styles from './split.module.css';

export interface SplitSectionProps {
  subtitle: string;
  mainTitle: string;
  paragraph: string;
  leftBackgroundImage: string;
  rightPersonImage: string;
  rightTitle: string;
  className?: string;
}

const SplitSection: React.FC<SplitSectionProps> = ({
  subtitle,
  mainTitle,
  paragraph,
  leftBackgroundImage,
  rightPersonImage,
  rightTitle,
  className
}) => {
  return (
    <section className={`${styles.splitSection} ${className || ''}`}>
      <div 
        className={styles.leftSection}
        style={{ 
          backgroundImage: `url(${leftBackgroundImage})`,
        }}
      >
        <div className={styles.leftContent}>
          <div className={styles.textWrapper}>
            <span className={styles.subtitle}>{subtitle}</span>
            <h2 className={styles.mainTitle}>{mainTitle}</h2>
          </div>
          <p className={styles.paragraph}>{paragraph}</p>
        </div>
      </div>

      <div className={styles.rightSection}>
        <h3 className={styles.rightTitle}>{rightTitle}</h3>
      </div>

      <div className={styles.imageWrapper}>
        <img 
          src={rightPersonImage} 
          alt={`${rightTitle} representative`}
          className={styles.personImage}
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default SplitSection;