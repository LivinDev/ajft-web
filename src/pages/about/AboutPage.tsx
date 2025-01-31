import React from 'react';
import styles from './style.module.css';
import FounderIMAGE from '../../assets/images/founder.png';

const AboutPage: React.FC = () => {
  const visionItems = [
    "Empowering 10 Million PwDs Across India",
    "Sustainable Employment for 0.2 Million Skilled Youth",
    "Expanding CSO Partner Network under IDEA",
    "Supporting Organizations in 50 Developing Countries",
    "State-of-the-Art Global Resource Center in Gurugram",
    "Participating in International Abilympics Finland 2027",
    "Establishing a Corpus of ₹ 100 Crore"
  ];

  const cardData = [
    {
      title: "Vision",
      icon: "🎯",
      description: "To create a society where every individual has equal opportunities for growth and development."
    },
    {
      title: "Mission",
      icon: "🚀",
      description: "Empowering communities through education, healthcare, and sustainable development initiatives."
    },
    {
      title: "Strategy",
      icon: "⚡",
      description: "Implementing innovative solutions and fostering partnerships to create lasting social impact."
    }
  ];

  const valueCards = [
    {
      title: "Our Values",
      description: "Integrity, Excellence, Empathy",
      content: "We are committed to maintaining the highest standards of transparency and accountability while serving our communities with compassion and dedication."
    },
    {
      title: "Our Impact",
      description: "Transforming Lives",
      content: "Through our initiatives, we've touched thousands of lives, creating sustainable change and building stronger communities across Bihar and beyond."
    }
  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>About Anand Jivna Foundation Trust</h1>
          <p className={styles.heroSubtitle}>
            Empowering Communities, Transforming Lives, Building a Better Tomorrow
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className={styles.founderSection}>
        <div className={styles.founderContainer}>
          <div className={styles.founderGrid}>
            <div className={styles.founderImage}>
              <img src={FounderIMAGE} alt="Mr. Guddu Kumar" />
            </div>
            <div className={styles.founderContent}>
              <div>
                <h2 className={styles.founderName}>Mr. Guddu Kumar</h2>
                <p className={styles.founderRole}>Founder & Managing Trustee</p>
              </div>
              <p className={styles.founderText}>
                "I was born in a farmer's house and left for education, but now I want to return to my village in Bihar. Many families there still struggle to educate their children due to financial difficulties, contributing to Bihar's ongoing backwardness. It's vital for us, along with the government, to unite and support this campaign to help Bihar progress."
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.mainContent}>
        {/* About Section */}
        <section className={styles.aboutSection}>
          <p className={styles.description}>
            ANAND JIVAN FOUNDATION TRUST is a Public Charitable Trust Under Indian Trust Act 1882. It was Registered on 06th April 2023. The Settler of the Foundation is Mr. Guddu Kumar. This Trust is Established for Public Charitable Purposes Like Education, Healthcare, Women Empowerment, Unemployment, National Pandemic, Natural Disasters / Calamities, Cleanliness, Drinking Water and so on.
          </p>
        </section>

        {/* Vision 2026 Section */}
        <section className={styles.visionSection}>
          <h2 className={styles.sectionTitle}>Vision 2026</h2>
          <div className={styles.visionGrid}>
            {visionItems.map((item, index) => (
              <div key={index} className={styles.visionItem}>
                <div className={styles.visionNumber}>{index + 1}</div>
                <p className={styles.visionText}>{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cards Section */}
        <section className={styles.cardGrid}>
          {cardData.map((card, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardIcon}>{card.icon}</div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDescription}>{card.description}</p>
            </div>
          ))}
        </section>

        {/* Values Section */}
        <section className={styles.valuesGrid}>
          {valueCards.map((value, index) => (
            <div key={index} className={styles.valueCard}>
              <h3 className={styles.cardTitle}>{value.title}</h3>
              <p className={styles.valueSubtitle}>{value.description}</p>
              <p className={styles.valueContent}>{value.content}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default AboutPage;