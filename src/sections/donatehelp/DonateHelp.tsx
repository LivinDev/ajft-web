
import styles from './donatestyle.module.css';

const DonateSection = () => {
  return (
    <section className={styles.donateSection}>
      <h2 className={styles.sectionTitle}>Your Donation Helps!</h2>
      <div className={styles.impactContainer}>
        <div className={styles.impactItem}>
          <img
            src="https://placehold.co/600x400/orange/white"
            alt="Education"
            className={styles.impactImage}
          />
          <p>Supporting education for children in need.</p>
        </div>
        <div className={styles.impactItem}>
          <img
            src="https://placehold.co/600x400/green/white"
            alt="Healthcare"
            className={styles.impactImage}
          />
          <p>Providing essential healthcare services.</p>
        </div>
        <div className={styles.impactItem}>
          <img
            src="https://placehold.co/600x400/blue/white"
            alt="Food"
            className={styles.impactImage}
          />
          <p>Ensuring access to nutritious food.</p>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
