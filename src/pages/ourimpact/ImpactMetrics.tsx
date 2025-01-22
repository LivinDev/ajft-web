// src/components/ImpactMetrics/ImpactMetrics.tsx
import React from 'react';
import styles from './style.module.css';

interface Metric {
  label: string;
  value: number;
}

interface ImpactMetricsProps {
  metrics: Metric[];
}

const ImpactMetrics: React.FC<ImpactMetricsProps> = ({ metrics }) => {
  return (
    <section className={styles.metrics}>
      {metrics.map((metric, index) => (
        <div key={index} className={styles.metric}>
          <h2>{metric.value}</h2>
          <p>{metric.label}</p>
        </div>
      ))}
    </section>
  );
};

export default ImpactMetrics;
