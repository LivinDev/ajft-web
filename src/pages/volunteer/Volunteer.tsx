import Style from './volunteerstyle.module.css';
import VolunteerForm from './VolunteerForm';
import VolunteerImage from '../../assets/images/volunteer.png';
import { useEffect } from 'react';

const VolunteerPage = () => {
  useEffect(() => {
    document.title = "Join as Volunteer | Anand Jivan Foundation";
  }, []);

  return (
    <div className={Style.volunteerPage}>
      <div className={Style.heroSection}>
        <h1 className={Style.heroTitle}>Become a Volunteer</h1>
        <p className={Style.heroSubtitle}>Make a Difference in Your Community</p>
      </div>

      <div className={Style.contentWrapper}>
        <div className={Style.leftSection}>
          <div className={Style.imageCard}>
            <img 
              src={VolunteerImage} 
              alt="Volunteer team working together" 
              className={Style.responsiveImage}
            />
            <div className={Style.imageOverlay}></div>
          </div>
          
          <div className={Style.missionSection}>
            <h2 className={Style.sectionTitle}>Our Volunteer Mission</h2>
            <div className={Style.accentLine}></div>
            <p className={Style.missionText}>
              At Anand Jivan Foundation Trust, we empower communities through active participation. 
              Your dedication can transform lives by:
            </p>
            <ul className={Style.benefitsList}>
              <li>Educating underprivileged children</li>
              <li>Managing essential distribution camps</li>
              <li>Supporting healthcare initiatives</li>
              <li>Developing special needs programs</li>
            </ul>
            <div className={Style.quoteBox}>
              <p>"No act of kindness, no matter how small, is ever wasted."</p>
              <span>- Aesop</span>
            </div>
          </div>
        </div>

        <div className={Style.rightSection}>
          <VolunteerForm />
        </div>
      </div>
    </div>
  );
};

export default VolunteerPage;