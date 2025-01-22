
import Style from './volunteerstyle.module.css';

import VolunteerForm from './VolunteerForm';
import VolunteerImage from '../../assets/images/volunteer.png';

const VolunteerPage = () => {
  return (
    <div className={Style.contactouter}>
      <div className={Style.contactinner}>
        <div className={Style.leftsection}>
          <div className={Style.imageView}>
            <img src={VolunteerImage} alt="Volunteer" />
          </div>
          <div>
            <h1 className={Style.heading}>Anand Jivan Foundation Trust</h1>
            <p className={Style.description}>
              Our mission of aiding the less fortunate by joining our Foundation
              as a volunteer. Your involvement could include educating children,
              assisting in distribution camps, supporting hospitals, and
              engaging in various activities for underprivileged and special
              needs groups in society. The primary qualifications needed for
              this role are your time, a few skills, and dedication to the
              cause.
            </p>
          </div>
        </div>
        <div className={Style.rightsection}>
          <VolunteerForm />
        </div>
      </div>
    </div>
  );
};

export default VolunteerPage;
