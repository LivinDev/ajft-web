// EventCard.tsx
import { Link } from 'react-router-dom';
import Style from '../../../styles/ui/eventCard.module.css';
import { Calendar, MapPin, ArrowRight, Heart } from 'lucide-react';

interface EventCardProps {
  heading: string;
  image: string;
  description: string;
  linkTo: string;
  donateLinkTo?: string;
  date?: string;
  location?: string;
}

const EventCard: React.FC<EventCardProps> = ({
  heading,
  image,
  description,
  linkTo,
  donateLinkTo = '/donate',
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
        
        <div className={Style.cardActions}>
          <Link to={linkTo} className={Style.cardLink}>
            <span>Learn More</span>
            <ArrowRight size={16} className={Style.arrowIcon} />
          </Link>
          <Link to={donateLinkTo} className={Style.donateLink}>
           <Heart size={16} className={Style.heartIcon} fill="currentColor" />
            <span style={{color:"blue",fontWeight:'bold'}}>Donate</span>
           
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;