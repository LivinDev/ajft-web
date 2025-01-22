// src/components/Summary/Summary.tsx
import React from 'react';
import styles from './style.module.css';

interface SummaryProps {
  description: string;
}

const Summary: React.FC<SummaryProps> = ({ description }) => {
  return (
    <section className={styles.summary}>
      <p>{description}</p>
    </section>
  );
};

export default Summary;
