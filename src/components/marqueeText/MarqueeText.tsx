// MarqueeText.tsx
import React, { ReactNode } from 'react';
import styles from './style.module.css';

interface MarqueeTextProps {
  children: ReactNode;
  reverse?: boolean;
}

const MarqueeText: React.FC<MarqueeTextProps> = ({
  children,
  reverse = false,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.text} ${reverse ? styles.textReverse : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default MarqueeText;
