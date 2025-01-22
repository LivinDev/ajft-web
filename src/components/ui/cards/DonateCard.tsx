
import Style from '../../../styles/ui/donationCard.module.css';
import Button from '../Button';

interface DonationCardProps {
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
}

const DonationCard: React.FC<DonationCardProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className={Style.donationCard}>
      <div className={Style.cardTop}>
        <img src={imageUrl} alt={title} className={Style.cardImage} />
      </div>
      <div className={Style.cardBottom}>
        <h2 className={Style.cardTitle}>{title}</h2>
        <p className={Style.cardDescription}>{description}</p>
        <Button text="Donate Now" size="large" linkTo="/volunteer" />
      </div>
    </div>
  );
};

export default DonationCard;
