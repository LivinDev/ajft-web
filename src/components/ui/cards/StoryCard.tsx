// StoryCard.tsx
import styles from '../../../styles/ui/storyCard.module.css';
import { ArrowRight } from 'lucide-react';

interface StoryCardProps {
  imageUrl: string;
  title: string;
  description: string;
  category?: string;
  date?: string;
}

const StoryCard: React.FC<StoryCardProps> = ({
  imageUrl,
  title,
  description,
  category,
  date
}) => {
  return (
    <div className={styles.storyCard}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={imageUrl} alt={title} />
        {category && <span className={styles.category}>{category}</span>}
      </div>
      
      <div className={styles.content}>
        {date && <span className={styles.date}>{date}</span>}
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        
        <button className={styles.readMore}>
          <span>Read Full Story</span>
          <ArrowRight size={16} className={styles.arrow} />
        </button>
      </div>
    </div>
  );
};

export default StoryCard;