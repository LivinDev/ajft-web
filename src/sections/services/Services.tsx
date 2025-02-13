// Services.tsx
import Style from './style.module.css';
import Image1 from '../../assets/images/healthcare.jpg';
import Image2 from '../../assets/images/women-em.jpg';

import Image3 from '../../assets/images/education.jpg';
import Image4 from '../../assets/images/society-welfare.jpg';

interface ServiceItem {
  id: number;
  title: string;
  image: string;
  description: string;
  link?: string;
}

const services: ServiceItem[] = [
  {
    id: 1,
    title: "Healthcare",
    image: Image1,
    description: "Delivering comprehensive medical care, preventive services, and health education to underserved populations",
  },
  {
    id: 2,
    title: "Education Support",
    image: Image2,
    description: "Facilitating access to quality education, learning resources, and vocational training programs",
  },
  {
    id: 3,
    title: "Women Empowerment",
    image: Image3,
    description: "Promoting gender equality through skill development, economic opportunities, and leadership programs",
  },
  {
    id: 4,
    title: "Society Welfare",
    image: Image4,
    description: "Creating positive social impact through community development initiatives and support programs",
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
            <div className={Style.servicecard} key={service.id}>
              <div className={Style.imageWrapper}>
                <img src={service.image} alt={service.title} />
              </div>
              <div className={Style.overlay}>
                <div className={Style.content}>
                  <h3 className={Style.servicename}>{service.title}</h3>
                  <p className={Style.servicedesc}>{service.description}</p>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;