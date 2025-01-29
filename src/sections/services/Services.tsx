// Services.tsx
import { Link } from 'react-router-dom';
import Style from './style.module.css';
import Image1 from '../../assets/images/bg-1.jpg';
import Image2 from '../../assets/images/bg-2.jpg';
import Image3 from '../../assets/images/bg-3.jpg';
import Image4 from '../../assets/images/bg-4.jpg';

interface ServiceItem {
  id: number;
  title: string;
  image: string;
  description: string;
  link: string;
}

const services: ServiceItem[] = [
  {
    id: 1,
    title: "Healthcare",
    image: Image1,
    description: "Providing essential medical services to communities in need",
    link: "/services/healthcare"
  },
  {
    id: 2,
    title: "Education",
    image: Image2,
    description: "Empowering through quality education and skill development",
    link: "/services/education"
  },
  {
    id: 3,
    title: "Community Development",
    image: Image3,
    description: "Building stronger, more resilient communities",
    link: "/services/community"
  },
  {
    id: 4,
    title: "Child Welfare",
    image: Image4,
    description: "Supporting children's growth and development",
    link: "/services/child-welfare"
  },
 
];

const Services = () => {
  return (
    <div className={Style.servicemain}>
      <div className={Style.innercontainer}>
        <div className={Style.headerSection}>
          <span className={Style.subtitle}>WHAT WE DO</span>
          <h1 className={Style.title}>Our Services</h1>
          <p className={Style.description}>
            We provide comprehensive support to communities through various
            initiatives aimed at creating lasting positive change.
          </p>
        </div>

        <div className={Style.cardcontainer}>
          {services.map((service) => (
            <Link to={service.link} className={Style.servicecard} key={service.id}>
              <div className={Style.imageWrapper}>
                <img src={service.image} alt={service.title} />
              </div>
              <div className={Style.overlay}>
                <div className={Style.content}>
                  <h3 className={Style.servicename}>{service.title}</h3>
                  <p className={Style.servicedesc}>{service.description}</p>
                  <span className={Style.learnMore}>Learn More</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;