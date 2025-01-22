
import styles from './logosection.module.css';
import Button from '../ui/Button';
import LogoImage from '../../assets/images/ajftlogo.jpg';

const LogoSection = () => {
  return (
    <div className={styles.outersection}>
      <div className={styles.innersection}>
        <div className={styles.logo}>
          <img src={LogoImage} height={80} alt="" />

          <div className="logo-def">
            <h1 className="logo-def">Anand Jivan Foundation Trust</h1>
            <p>Let's Make Better Life</p>
          </div>
        </div>
        <div className={styles.buttons}>
          <Button text="Donate Now" size="large" linkTo="/donate" />
          <Button text="Login" size="large" linkTo="/login" />
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
