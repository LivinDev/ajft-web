import TeamCard from '../../components/ui/cards/TeamCard';
import ProfileImage from '../../assets/images/founder.jpg';
import TeamImage from '../../assets/images/team.jpg';
import Volunteer from '../../sections/volunteer/Volunteer';
import styles from './style.module.css';

const teamMembers = [
  {
    name: 'John Doe',
    photo: ProfileImage,
    position: 'Software Engineer',
    socialMedia: {
      twitter: 'https://twitter.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
      github: 'https://github.com/johndoe',
    },
  },
  {
    name: 'John Doe',
    photo: ProfileImage,
    position: 'Software Engineer',
    socialMedia: {
      twitter: 'https://twitter.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
      github: 'https://github.com/johndoe',
    },
  },
  {
    name: 'John Doe',
    photo: ProfileImage,
    position: 'Software Engineer',
    socialMedia: {
      twitter: 'https://twitter.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
      github: 'https://github.com/johndoe',
    },
  },
  {
    name: 'John Doe',
    photo: ProfileImage,
    position: 'Software Engineer',
    socialMedia: {
      twitter: 'https://twitter.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
      github: 'https://github.com/johndoe',
    },
  },
  {
    name: 'John Doe',
    photo: ProfileImage,
    position: 'Software Engineer',
    socialMedia: {
      twitter: 'https://twitter.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
      github: 'https://github.com/johndoe',
    },
  },
  
];

const TeamSection = () => {
  return (
    <div className={styles.teamContainer}>
      {/* Team Introduction */}
      <div className={styles.teamIntroSection}>
        <div className={styles.introContent}>
          <h1 className={styles.mainHeading}>Meet Our Team</h1>
          <p className={styles.introText}>
            Our dedicated team of professionals works tirelessly to create positive change 
            in communities across Bihar. Together, we bring diverse skills and shared commitment 
            to our mission.
          </p>
        </div>
        <div className={styles.imageSection}>
          <img src={TeamImage} alt="Our Team" className={styles.teamImage} />
        </div>
      </div>

      {/* Team Members Grid */}
      <div className={styles.teamGridSection}>
        <div className={styles.gridContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.teamHeading}>Our Leadership Team</h2>
            <div className={styles.headingAccent}></div>
          </div>
          
          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <div key={index} className={styles.cardWrapper}>
                <TeamCard {...member} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Volunteer Section */}
      <Volunteer />
    </div>
  );
};

export default TeamSection;