
import { Link } from 'react-router-dom';
import Style from '../../../styles/ui/eventCard.module.css';

interface EventCardProps {
  heading: string;
  image: string;
  description: string;
  linkTo: string;
}

const EventCard: React.FC<EventCardProps> = ({
  heading,
  image,
  description,
  linkTo,
}) => {
  return (
    <div className={Style.card}>
      <img src={image} alt={heading} className={Style.cardImage} />
      <div className={Style.cardContent}>
        <h2 className={Style.cardTitle}>{heading}</h2>
        <p className={Style.cardDescription}>{description}</p>
        <Link to={linkTo} className={Style.cardLink}>
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
