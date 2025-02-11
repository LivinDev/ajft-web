import { useEffect, useState } from 'react';
import styles from './governance.module.css';
import FounderImage from "../../assets/images/founder.png"
import DummyImage from "../../assets/images/dummy-profile.jpeg"
const Governance = () => {
  const [activeTab, setActiveTab] = useState('mentor');

  const renderMentorSection = () => (
    <div className={styles.mentorSection}>
      <h2 className={styles.mentorHeader}>
     ANAND JIVAN FOUNDATION TRUST MENTOR & GURU - GUDDU KUMAR
      </h2>
      <div className={styles.mentorContent}>
        <div className={styles.mentorImage}>
          <img src={FounderImage} alt="Dr. MB Athreya" />
        </div>
        <div className={styles.mentorText}>
          <p className={styles.mentorDesc}>
            Padma Bhushan Dr. Mrityunjay Athreya is recognized as one of the founders 
            and pioneers of the Indian Management Movement, including Education, 
            Research and Consulting. He has made a sustained contribution, over nearly 
            five decades, after obtaining his Doctorate in Business Administration 
            at the Harvard University.
          </p>
          <h3 className={styles.mentorHeader}>From the desk of Mentor</h3>
          <p className={styles.mentorDesc}>
            Sarthak has successfully converted some of the challenges posed by the 
            Corona pandemic into opportunities. A major challenge has been the lockdown, 
            and the consequent restrictions on travel and gatherings.
          </p>
        </div>
      </div>
    </div>
  );

  const renderTrusteesSection = () => (
    <div className={styles.trusteesGrid}>
      {[
        { name: 'Mr. Rakesh Kumar ', role: 'Board of Trustee' },
       
      ].map((trustee, index) => (
        <div key={index} className={styles.trusteeCard}>
          <div className={styles.trusteeInfo}>
            <img 
              src={DummyImage}
              alt={trustee.name}
              className={styles.trusteeImage}
            />
            <div>
              <h3 className={styles.trusteeName}>{trustee.name}</h3>
              <p>{trustee.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderManagementSection = () => (
    <div className={styles.managementGrid}>
      {[
        { name: 'Mr. Guddu Kumar ', title: 'Founder & Chairman' },
        { name: 'Mrs. Pooja Kumari', title: 'Co-Founder' },
        { name: 'Mrs. Ankita Kumari', title: 'Secretary' },
        { name: 'Mr. Rakesh Kumar', title: 'Board of Trustee' },
        { name: 'Mr. Ashish Kumar', title: 'Board of Member' },
       
      ].map((member, index) => (
        <div key={index} className={styles.managementCard}>
          <h3 className={styles.managementName}>{member.name}</h3>
          <p className={styles.managementTitle}>{member.title}</p>
        </div>
      ))}
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'mentor':
        return renderMentorSection();
      case 'trustees':
        return renderTrusteesSection();
      case 'management':
        return renderManagementSection();
      default:
        return null;
    }
  };

    useEffect(() => {
      document.title = "Governance | Anand Jivan Foundation";
    }, []);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Governance</h1>
      
      <div className={styles.tabContainer}>
        <div className={styles.tabButtons}>
          {[
            { id: 'mentor', label: 'Mentor' },
            { id: 'trustees', label: 'Board of Trustees' },
            { id: 'management', label: 'Management Team' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${styles.tabButton} ${
                activeTab === tab.id ? styles.activeTab : ''
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className={styles.contentSection}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Governance;