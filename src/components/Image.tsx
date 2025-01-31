import React from 'react';
import styles from '../styles/ui/image.module.css';

interface ImageProps {
  data: Array<{
    src: string;
    alt?: string;
    title?: string;
    description?: string;
  }>;
  onClick: (index: number) => void;
}

const Images: React.FC<ImageProps> = ({ data, onClick }) => {
  return (
    <div className={styles.imageGrid}>
      {data.map((image, index) => (
        <div 
          key={index}
          className={styles.imageWrapper}
          onClick={() => onClick(index)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              onClick(index);
            }
          }}
        >
          <img
            src={image.src}
            alt={image.alt || `Certificate ${index + 1}`}
            className={styles.image}
            loading="lazy"
          />
          {image.title && (
            <div className={styles.imageOverlay}>
              <h3 className={styles.imageTitle}>{image.title}</h3>
              {image.description && (
                <p className={styles.imageDescription}>{image.description}</p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Images;