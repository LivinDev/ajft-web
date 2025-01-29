// EventCard.tsx
import { Link } from 'react-router-dom';
import Style from '../../../styles/ui/eventCard.module.css';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

interface EventCardProps {
  heading: string;
  image: string;
  description: string;
  linkTo: string;
  date?: string;
  location?: string;
}

const EventCard: React.FC<EventCardProps> = ({
  heading,
  image,
  description,
  linkTo,
  date = 'Upcoming',
  location = 'To be announced',
}) => {
  return (
    <div className={Style.card}>
      <div className={Style.imageWrapper}>
        <img src={image} alt={heading} className={Style.cardImage} />
        <div className={Style.overlay} />
      </div>
      
      <div className={Style.cardContent}>
        <div className={Style.metaInfo}>
          <span className={Style.metaItem}>
            <Calendar size={16} className={Style.icon} />
            {date}
          </span>
          <span className={Style.metaItem}>
            <MapPin size={16} className={Style.icon} />
            {location}
          </span>
        </div>

        <h2 className={Style.cardTitle}>{heading}</h2>
        <p className={Style.cardDescription}>{description}</p>
        
        <Link to={linkTo} className={Style.cardLink}>
          <span>Learn More</span>
          <ArrowRight size={16} className={Style.arrowIcon} />
        </Link>
      </div>
    </div>
  );
};

export default EventCard;