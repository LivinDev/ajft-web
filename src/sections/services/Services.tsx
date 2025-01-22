
import Image1 from '../../assets/images/bg-1.jpg';
import Image2 from '../../assets/images/bg-2.jpg';
import Image3 from '../../assets/images/bg-3.jpg';
import Image4 from '../../assets/images/bg-4.jpg';
import Style from './style.module.css';
import { Link } from 'react-router-dom';
const Services = () => {
  return (
    <div className={Style.servicemain}>
      <div className={Style.innercontainer}>
        <h1 className={Style.title}>Services</h1>
        <div className={Style.cardcontainer}>
          <Link to="" className={Style.servicecard}>
            <img src={Image1} alt="" />
            <div className={Style.overlay}></div>
            <div className={Style.servicename}>Health Care</div>
          </Link>
          <Link to="" className={Style.servicecard}>
            <img src={Image2} alt="" />
            <div className={Style.overlay}></div>
            <div className={Style.servicename}>Education</div>
          </Link>
          <Link to="" className={Style.servicecard}>
            <img src={Image3} alt="" />
            <div className={Style.overlay}></div>
          </Link>
          <Link to="" className={Style.servicecard}>
            <img src={Image4} alt="" />
            <div className={Style.overlay}></div>
          </Link>
          <Link to="" className={Style.servicecard}>
            <img src={Image1} alt="" />
            <div className={Style.overlay}></div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
