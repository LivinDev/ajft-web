// src/components/OurAreaOfWork/OurAreaOfWork.tsx
import React from 'react';
import styles from './style.module.css';
import EducationImage from '../../assets/images/eduaction-event.jpg';

const OurAreaOfWork: React.FC = () => {
  return (
    <div className={styles.container}>
      <section className={styles.introduction}>
        <h1>Our Area of Work</h1>
        <p>
          We are dedicated to making a positive impact in the areas of
          education, women empowerment, and healthcare.
        </p>
      </section>

      <section className={styles.section}>
        <div className={styles.content}>
          <img src={EducationImage} alt="Education" className={styles.image} />
          <div>
            <h2>Education</h2>
            <p>
              Our education initiatives focus on providing quality education to
              underprivileged children. We believe that education is the key to
              breaking the cycle of poverty and creating a better future for
              all. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              ullamcorper accumsan nisi, vel faucibus mi vestibulum non.
              Suspendisse tristique porta felis id egestas. Curabitur at arcu
              est. Sed mollis leo mauris, et finibus arcu eleifend non. Vivamus
              tempus viverra enim, non ultricies tortor. Suspendisse potenti.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.content2}>
          <img src={EducationImage} alt="Education" className={styles.image} />
          <div>
            <h2>Women Empowerment</h2>
            <p>
              We are committed to empowering women through various programs that
              focus on skill development, financial independence, and
              leadership. Our goal is to create a society where women have equal
              opportunities and are respected and valued. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Cras ullamcorper accumsan nisi,
              vel faucibus mi vestibulum non. Suspendisse tristique porta felis
              id egestas. Curabitur at arcu est. Sed mollis leo mauris, et
              finibus arcu eleifend non. Vivamus tempus viverra enim, non
              ultricies tortor. Suspendisse potenti.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.content}>
          <img src={EducationImage} alt="Education" className={styles.image} />
          <div>
            <h2>Healthcare</h2>
            <p>
              Our healthcare initiatives aim to provide accessible and
              affordable healthcare services to communities in need. We believe
              that good health is essential for a productive and fulfilling
              life. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Cras ullamcorper accumsan nisi, vel faucibus mi vestibulum non.
              Suspendisse tristique porta felis id egestas. Curabitur at arcu
              est. Sed mollis leo mauris, et finibus arcu eleifend non. Vivamus
              tempus viverra enim, non ultricies tortor. Suspendisse potenti.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurAreaOfWork;
