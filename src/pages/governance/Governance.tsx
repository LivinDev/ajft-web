import { useEffect, useState } from 'react';
import styles from './governance.module.css';
import FounderImage from "../../assets/images/founder.png"
import Pooja from "../../assets/images/pooja.jpeg"
import Ankita from "../../assets/images/ankitakumari.png"
const Governance = () => {
  const [activeTab, setActiveTab] = useState('mentor');

  const renderMentorSection = () => (
   <div className={styles.mentorSection}>
      <h2 className={styles.mentorHeader}>
        ANAND JIVAN FOUNDATION TRUST MENTOR - GUDDU KUMAR
      </h2>
      <div className={styles.mentorContent}>
        <div className={styles.mentorImage}>
          <img src={FounderImage} alt="Guddu Kumar" />
        </div>
        <div className={styles.mentorText}>
          <p className={styles.mentorDesc}>
            "I was born in a farmer's house and left for education, but now I want to return to my village in Bihar. Many families there still struggle to educate their children due to financial difficulties, contributing to Bihar's ongoing backwardness. It's vital for us, along with the government, to unite and support this campaign to help Bihar progress."
          </p>
          <h3 className={styles.mentorHeader}>About Anand Jivan Foundation Trust</h3>
          <p className={styles.mentorDesc}>
            The Anand Jivan Foundation Trust (AJFT) is a non-profit organization based in India dedicated to uplifting underprivileged communities through various social welfare initiatives. The foundation's mission is to create sustainable development by addressing issues related to education, healthcare, women empowerment, and environmental conservation. Founded with a vision to serve humanity, AJFT has been instrumental in providing essential services and opportunities to those in need.
          </p>
          <h3 className={styles.mentorHeader}>History and Founding</h3>
          <p className={styles.mentorDesc}>
            The Anand Jivan Foundation Trust was established in 2023 by a group of philanthropists and social activists who recognized the urgent need for comprehensive community development programs in rural and urban areas of India. The founders, driven by a passion for social change, aimed to bridge the gap between government services and the underserved populations. Over the years, AJFT has grown into a reputable organization with a significant impact on countless lives.
          </p>
          <h3 className={styles.mentorHeader}>Key Initiatives and Programs</h3>
          <h4 className={styles.subHeader}>Education</h4>
          <p className={styles.mentorDesc}>
            AJFT places a strong emphasis on education, believing it to be the cornerstone of societal progress. The foundation runs several educational programs, including Free Tuition Centers providing supplementary education to children from low-income families, Scholarship Programs offering financial assistance to meritorious students, and Adult Literacy Campaigns organizing literacy classes for adults, particularly women.
          </p>
          <h4 className={styles.subHeader}>Healthcare</h4>
          <p className={styles.mentorDesc}>
            Access to quality healthcare is a fundamental right, yet many communities in India lack basic medical facilities. AJFT has taken several steps through Mobile Health Clinics deploying to remote areas, Health Camps conducted regularly in collaboration with local hospitals, and Awareness Programs educating communities about preventive healthcare measures.
          </p>
          <h4 className={styles.subHeader}>Women Empowerment</h4>
          <p className={styles.mentorDesc}>
            Empowering women is central to AJFT's mission. The foundation forms Self-Help Groups (SHGs) to promote savings and microfinance, offers Skill Development Workshops for vocational training, and provides Legal Aid and Advocacy services to combat domestic violence and gender discrimination.
          </p>
          <h4 className={styles.subHeader}>Environmental Conservation</h4>
          <p className={styles.mentorDesc}>
            AJFT is committed to preserving the environment through Tree Plantation Drives, Clean Water Projects implementing rainwater harvesting systems, and Waste Management Programs promoting recycling and proper waste disposal practices.
          </p>
          <h3 className={styles.mentorHeader}>Impact and Success Stories</h3>
          <p className={styles.mentorDesc}>
            Over the years, AJFT has educated over 10,000 children, provided healthcare services to more than 50,000 people, empowered 5,000 women, and planted over 100,000 trees while ensuring access to clean drinking water for numerous villages.
          </p>
          <h3 className={styles.mentorHeader}>Partnerships and Collaborations</h3>
          <p className={styles.mentorDesc}>
            AJFT works closely with various stakeholders, including government agencies like the Ministry of Health and Family Welfare, local educational institutions, corporate sponsors such as Tata Trusts and Reliance Foundation, and international NGOs like UNICEF and WHO.
          </p>
          <h3 className={styles.mentorHeader}>Future Plans</h3>
          <p className={styles.mentorDesc}>
            The foundation plans to expand its educational programs focusing on digital literacy, increase mobile health clinics to cover more remote areas, launch new women empowerment projects in entrepreneurship, and initiate large-scale environmental projects such as community forests and renewable energy installations.
          </p>
          <h3 className={styles.mentorHeader}>From the desk of Mentor</h3>
          <p className={styles.mentorDesc}>
            As a mentor at AJFT, I'm committed to supporting our mission of uplifting communities across Bihar and beyond. We face many challenges, but through collaboration and determination, we continue to make progress in education, healthcare, women's empowerment, and environmental conservation.
          </p>
        </div>
      </div>
    </div>
  );

  const renderTrusteesSection = () => (
    <div className={styles.trusteesGrid}>
      {[
        { name: 'Mr. Guddu Kumar ', role: 'Founder & Chairman' , imageLink:FounderImage },
        { name: 'Mrs. Pooja Kumari', role: 'Co-Founder' ,imageLink:Pooja },
        { name: 'Mrs. Ankita Kumari', role: 'Secretary',imageLink:Ankita },
       
      ].map((trustee, index) => (
        <div key={index} className={styles.trusteeCard}>
          <div className={styles.trusteeInfo}>
            <img 
              src={trustee.imageLink}
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