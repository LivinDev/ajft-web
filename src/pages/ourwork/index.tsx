import React from 'react';
import styles from './style.module.css';
import EducationImage from '../../assets/images/eduaction-event.jpg';

const OurAreaOfWork: React.FC = () => {
  const areas = [
    {
      title: "Education",
      description: `Our education initiatives focus on providing quality education to
        underprivileged children. We believe that education is the key to
        breaking the cycle of poverty and creating a better future for
        all. Through innovative programs and dedicated mentorship, we're
        working to ensure every child has access to quality education and
        the opportunity to reach their full potential.`,
      image: EducationImage,
      reversed: false,
    },
    {
      title: "Women Empowerment",
      description: `We are committed to empowering women through comprehensive programs that
        focus on skill development, financial independence, and
        leadership. Our goal is to create a society where women have equal
        opportunities and are respected and valued. Through targeted
        initiatives and community support, we're helping women build
        confidence, develop skills, and achieve their aspirations.`,
      image: EducationImage,
      reversed: true,
    },
    {
      title: "Healthcare",
      description: `Our healthcare initiatives aim to provide accessible and
        affordable healthcare services to communities in need. We believe
        that good health is essential for a productive and fulfilling
        life. Through mobile clinics, health camps, and awareness
        programs, we're working to ensure that quality healthcare reaches
        every corner of our community.`,
      image: EducationImage,
      reversed: false,
    },
  ];

  return (
    <div className={styles.container}>
      <section className={styles.introduction}>
        <h1 className={styles.mainTitle}>Our Areas of Impact</h1>
        <p className={styles.subtitle}>
          We are dedicated to creating positive change through focused initiatives
          in education, women empowerment, and healthcare, touching lives and
          transforming communities across Bihar.
        </p>
      </section>

      {areas.map((area, index) => (
        <section key={index} className={styles.section}>
          <div className={area.reversed ? styles.content2 : styles.content}>
            <div className={styles.imageWrapper}>
              <img src={area.image} alt={area.title} className={styles.image} />
            </div>
            <div className={styles.textContent}>
              <h2 className={styles.sectionTitle}>{area.title}</h2>
              <p className={styles.description}>{area.description}</p>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default OurAreaOfWork;