
import styles from '../../../styles/ui/storyCard.module.css';

interface StoryCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const StoryCard: React.FC<StoryCardProps> = ({
  imageUrl,
  title,
  description,
}) => {
  return (
    <div className={styles.storyCard}>
      <img className={styles.image} src={imageUrl} alt={title} />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default StoryCard;
