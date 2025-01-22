// ProtectedLayout.tsx
import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar';
import styles from './style.module.css';

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout: React.FC<ProtectedLayoutProps> = ({ children }) => {
  const sidebarItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <div className={styles.layout}>
      <Sidebar items={sidebarItems} />
      <div className={styles.content}>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default ProtectedLayout;
