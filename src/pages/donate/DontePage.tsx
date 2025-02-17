import React, { useEffect, useState } from 'react';
import { Building2, Users, Globe, IndianRupee, CreditCard } from 'lucide-react';
import styles from './donatepage.module.css';
import Donate from "../../assets/images/donate.jpg"
import Needy from "../../assets/images/kid-refugee-camp.jpg"
interface TabContent {
  title: string;
  items: string[];
  icon: JSX.Element;
}

// interface BankDetails {
//   accountName: string;
//   accountNumber: string;
//   accountType: string;
//   bankName: string;
//   branch: string;
//   ifscCode: string;
//   micrCode?: string;
//   swiftCode: string;
// }



const DonationPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('vocational');
  useEffect(() => {
    document.title = "Donate| Anand Jivan Foundation";
  }, []);
  const tabContent: Record<string, TabContent> = {
    vocational: {
      title: "Donate for Vocational Skilling",
      items: [
        "Assistive Devices",
        "Equipment Cost of Retail Lab/Hospitality Lab",
        "Equipment Cost of Abilympics Room",
        "Equipment Cost of Entrepreneurship and Self Employment Room",
        "Equipment Cost of Job Mapping and Sensitization Room",
        "Equipment Cost of Employment Information Room"
      ],
      icon: <Building2 size={24} />
    },
    intervention: {
      title: "Donate for Early Intervention Services",
      items: [
        "Therapeutic Equipment",
        "Sensory Integration Room",
        "Special Education Materials",
        "Assessment Tools",
        "Early Learning Kits"
      ],
      icon: <Users size={24} />
    },
    resource: {
      title: "Donate for Global Resource Center for PwDs",
      items: [
        "Research and Development",
        "Training Materials",
        "Documentation Center",
        "Accessibility Solutions",
        "Technology Innovation Lab"
      ],
      icon: <Globe size={24} />
    }
  };



  const bankDetails = {
    indian: {
      accountName: "ANAND JIVAN FOUNFATION TRUST",
      accountNumber: "50200082194362",
      accountType: "Current Account",
      bankName: "HDFC",
      branch: "SHIVDHARA DARBHANGA",
      ifscCode: "HDFC0005160",
   
    },
    foreign: {
      accountName: "SARTHAK EDUCATIONAL TRUST",
      accountNumber: "3981975247",
      accountType: "Saving Account",
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch",
      ifscCode: "SBIN0000691",
      swiftCode: "SBININBB104"
    }
  };

  return (
    <div className={styles.donationContainer}>
      {/* Main Title */}
      <h1 className={styles.mainTitle}>Donate to Empower Persons with Disability</h1>
       <div className={styles.donationButtons}>
        <button className={styles.indianDonation}>
          <IndianRupee size={20} />
          FOR INDIAN DONATION
        </button>
        {/* <button className={styles.foreignDonation}>
          <DollarSign size={20} />
          FOR FOREIGN DONATION
        </button> */}
      </div>
      {/* Tabs Navigation */}
      <div className={styles.tabsContainer}>
        <div className={styles.tabs}>
          {Object.entries(tabContent).map(([key, { title, icon }]) => (
            <button
              key={key}
              className={`${styles.tabButton} ${activeTab === key ? styles.activeTab : ''}`}
              onClick={() => setActiveTab(key)}
            >
              {icon}
              <span>{title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className={styles.contentSection}>
        <div className={styles.leftContent}>
          <h2 className={styles.pledgeTitle}>
            Pledge for providing one roof services to Persons with Disabilities by supporting
          </h2>
          <ul className={styles.itemsList}>
            {tabContent[activeTab].items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className={styles.rightContent}>
          <img
            src={Donate}
            alt="Sarthak Global Resource Center"
            className={styles.buildingImage}
          />
        </div>
      </div>

      {/* Additional Donation Methods */}
      {/* <section className={styles.additionalMethods}>
        <h2 className={styles.methodsTitle}>More way to donate</h2>
        <div className={styles.methodsGrid}>
          {donationMethods.map((method, index) => (
            <div key={index} className={styles.methodCard}>
              <img src={method.icon} alt={method.alt} className={styles.methodIcon} />
              <span className={styles.methodName}>{method.name}</span>
            </div>
          ))}
        </div>
      </section> */}

      {/* Bank Details Section */}
      <section className={styles.bankDetailsSection}>
        <div className={styles.bankDetailsGrid}>
          <div className={styles.bankDetailsCard}>
            <h3>Indian Account Holders</h3>
            <div className={styles.detailsContent}>
              {Object.entries(bankDetails.indian).map(([key, value]) => (
                <div key={key} className={styles.detailRow}>
                  <span className={styles.detailLabel}>
                    {key.replace(/([A-Z])/g, ' $1').trim()}:
                  </span>
                  <span className={styles.detailValue}>{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.bankDetailsCard}>
            <h3>Foreign Donors</h3>
            {/* <div className={styles.detailsContent}>
              {Object.entries(bankDetails.foreign).map(([key, value]) => (
                <div key={key} className={styles.detailRow}>
                  <span className={styles.detailLabel}>
                    {key.replace(/([A-Z])/g, ' $1').trim()}:
                  </span>
                  <span className={styles.detailValue}>{value}</span>
                </div>
              ))}
            </div> */}
            <h4>Coming soon</h4>
          </div>
        </div>
      </section>

      {/* Campaign Section */}
      <section className={styles.campaignSection}>
        <div className={styles.campaignContent}>
          <div className={styles.campaignText}>
            <h2>Campaign</h2>
            <h3>Support Special needs of 100 children</h3>
            <p>Help Children with Special Needs to take expensive therapies and make their future lively</p>
            <button className={styles.donateButton}>
              <CreditCard size={20} className={styles.buttonIcon} />
              DONATE NOW
            </button>
          </div>
          <div className={styles.campaignImage}>
            <img 
             src={Needy}
              alt="Children with special needs" 
              className={styles.campaignImg}
            />
          </div>
        </div>
      </section>

      {/* Donation Buttons */}
     
    </div>
  );
};

export default DonationPage;