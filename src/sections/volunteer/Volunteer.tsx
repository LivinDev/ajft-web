
import Style from './styles.module.css';
import Button from '../../components/ui/Button';

const Volunteer = () => {
  return (
    <div className={Style.volunsoutersection}>
      <div className={Style.volunsinnersection}>
        <div className={Style.section}>
          <p className={Style.subheading}>Join the volunteer team</p>
          <h1 className={Style.heading}>
            Join your hand with us for a better life and future
          </h1>
          <Button text="Join Us" size="large" linkTo="/volunteer" />
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
