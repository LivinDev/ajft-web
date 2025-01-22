// src/components/ProjectDetail/ProjectDetail.tsx
import React from 'react';
import styles from './style.module.css';

interface ProjectDetailProps {
  title: string;
  description: string;
  images: string[];
  statistics: string;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({
  title,
  description,
  images,
  statistics,
}) => {
  return (
    <section className={styles.project}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <div className={styles.images}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Project ${index}`}
            className={styles.image}
          />
        ))}
      </div>
      <p className={styles.statistics}>{statistics}</p>
    </section>
  );
};

export default ProjectDetail;
