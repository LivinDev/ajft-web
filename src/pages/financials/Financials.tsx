import { useEffect, useState } from 'react';
import styles from './financials.module.css';
import PDF from "../../assets/pdf/ajftrust-blancesheet.pdf"
const Financials = () => {
  const [activeTab, setActiveTab] = useState('accreditations');
  useEffect(() => {
    document.title = "Financials | Anand Jivan Foundation";
  }, []);
  
  const renderAccreditations = () => (
    <ol className={styles.accreditationsList}>
      <li className={styles.accreditationItem}>
        Anand Jivan Foundation Trust is registered under <span className={styles.highlight}>MCA for undertaking CSR Activities</span> with registration number <span className={styles.highlight}>CSR00065273</span>
      </li>
      <li className={styles.accreditationItem}>
        Anand Jivan Foundation Trust has been assigned an NGO grading of <span className={styles.highlight}>IRR NGO 3</span> for good operational and financial performance in related to other NGOs.
      </li>
      <li className={styles.accreditationItem}>
        A registered Trust under <span className={styles.highlight}>Indian Trust Act, 1882 with Registration No.46 dated 06 April 2023</span>
      </li>
      <li className={styles.accreditationItem}>
        Registered Under <span className={styles.highlight}>Section 80G of the Income Tax Act, 1961</span> which enables it to extend 50 percent exemption to its donors from the Income Tax.
      </li>
    </ol>
  );

  const renderFinancialReports = () => (
    <div className={styles.reportsSection}>
      <h2 className={styles.reportsTitle}>Annual Financial Reports</h2>
      
      <div className={styles.reportCards}>
       
        
        {/* Additional report cards can be added here */}
        <div className={styles.reportCard}>
          <div className={styles.reportIconContainer}>
            <i className={styles.pdfIcon}>📄</i>
          </div>
          <div className={styles.reportInfo}>
            <h3 className={styles.reportName}>Income & Expenditure Statement</h3>
            <p className={styles.reportPeriod}>FY 2024-2025</p>
          </div>
          <a 
            href={PDF}
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.viewButton}
          >
            View PDF
          </a>
        </div>
        
     
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Financials</h1>
      
      <div className={styles.tabContainer}>
        <div className={styles.tabButtons}>
          {[
            { id: 'accreditations', label: 'Accreditations' },
            { id: 'financial', label: 'Financial Reports' }
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
          {activeTab === 'accreditations' ? renderAccreditations() : renderFinancialReports()}
        </div>
      </div>
    </div>
  );
};

export default Financials;