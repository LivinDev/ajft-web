// PrivacyPolicy.tsx
import React, { useEffect } from 'react';
import styles from './style.module.css';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    document.title = "Privacy Policy | Anand Jivan Foundation";
  }, []);

  return (
    <div className={styles.privacyPage}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Privacy Policy</h1>
          <p className={styles.subtitle}>Last updated: February 2024</p>
        </header>

        <section className={styles.content}>
          <div className={styles.section}>
            <p>Anand Jivan Foundation Trust is committed to the ethical collection, retention and use of information on this site ('Site') that you provide to us about yourself ('Personal Information').</p>
          </div>

          <div className={styles.section}>
            <h2>Personal Information We Collect</h2>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>Name</div>
              <div className={styles.infoItem}>Age</div>
              <div className={styles.infoItem}>Occupation</div>
              <div className={styles.infoItem}>Email Address</div>
              <div className={styles.infoItem}>Postal Address</div>
              <div className={styles.infoItem}>Telephone Number</div>
              <div className={styles.infoItem}>Payment Details</div>
            </div>
          </div>

          <div className={styles.section}>
            <h2>Collection of Information</h2>
            <h3>Site Browsing</h3>
            <p>You browse the site anonymously. We do not require you to identify yourself or reveal any personal information when browsing through the Site. However, you may not be able to access certain sections of the Site or interact with us without providing personal information.</p>
            
            <h3>General Information Collection</h3>
            <p>When browsing through the Site, our operating system may automatically record certain general information about your visit such as:</p>
            <ul>
              <li>Connection details to other websites</li>
              <li>Date and time of visits</li>
              <li>Browser information</li>
              <li>Site traffic patterns</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2>Use of Personal Information</h2>
            <p>Anand Jivan Foundation Trust will use Personal Information for internal purposes including:</p>
            <ul>
              <li>Sending internal emails, features, and promotional materials</li>
              <li>Processing donations</li>
              <li>Generating donation receipts</li>
              <li>Maintaining an internal confidential database</li>
              <li>Evaluating and administering site activities</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2>Security</h2>
            <p>Anand Jivan Foundation Trust endeavors to use updated security measures to safeguard your personal information.</p>
          </div>

          <div className={styles.section}>
            <h2>Copyright Protection</h2>
            <p>All content on this site including graphics, text, icons, interfaces, logos, images and software is the property of Anand Jivan Foundation Trust and/or its content suppliers and is protected by Indian and international copyright laws.</p>
          </div>

          <div className={styles.section}>
            <h2>Terms & Conditions</h2>
            <p>By accessing and using this website, you agree to be bound by our terms and conditions. The website content is for general information only and subject to change without notice.</p>
          </div>
        </section>

        <div className={styles.taxCard}>
          <div className={styles.taxContent}>
            <h3>Tax Exemption Notice</h3>
            <p>All the Donations to Anand Jivan Foundation Trust are tax exempted under 80G of the Indian Income Tax Act</p>
            <p className={styles.charityId}>Charity Id: AAJTA9323K</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;