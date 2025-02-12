import TeamCard from '../../components/ui/cards/TeamCard';
import Volunteer from '../../sections/volunteer/Volunteer';
import styles from './style.module.css';
import PoojaImag from "../../assets/images/pooja.jpeg"
import AnkitaImg from "../../assets/images/ankitakumari.png"
import Founder from "../../assets/images/founder.png"
import Dummy from "../../assets/images/dummy-profile.jpeg"
import { useEffect } from 'react';



const leaderMember = {
  name: 'Mr. Guddu Kumar',
  photo: Founder,
  position: 'Chairperson',
  email: 'guddu.ajftrust@gmail.com',
  qualification: 'M.A Psychology'
};

const coreTeamMembers = [
  {
    name: 'Mrs. Pooja Kumari',
    photo: PoojaImag,
    position: 'Co-Founder',
    email: 'pooja.ajftrust@gmail.com',
    qualification: 'M.sc Extension Education and Communication Management'
  },
  {
    name: 'Mrs. Ankita Kumari',
    photo: AnkitaImg,
    position: 'Secretary',
    email: 'ankita@ajftrust.org',
    qualification: 'M.A Geography'
  },
  {
    name: 'Mr. Ashish Kumar',
    photo: Dummy,
    position: 'Board of Member',
    email: '',
    qualification: ''
  },
  {
    name: 'Mr. Rakesh Kumar',
    photo: Dummy,
    position: 'Board of Trustee',
    email: '',
    qualification: 'M.A History'
  }
];

const TeamSection = () => {
    useEffect(() => {
      document.title = "Team | Anand Jivan Foundation";
    }, []);
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
      </div>

      {/* Team Members Grid */}
      <div className={styles.teamGridSection}>
        <div className={styles.gridContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.teamHeading}>Our Leadership Team</h2>
            <div className={styles.headingAccent}></div>
          </div>
          
          {/* Leader Row */}
          <div className={styles.leaderRow}>
            <div className={styles.cardWrapper}>
              <TeamCard {...leaderMember} />
            </div>
          </div>

          {/* Core Team Row */}
          <div className={styles.coreTeamRow}>
            {coreTeamMembers.map((member, index) => (
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