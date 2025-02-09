// Stories.tsx
import Style from './style.module.css';
import StoryCard from '../../components/ui/cards/StoryCard';
import { Heart } from 'lucide-react';
import Button from '../../components/ui/Button';

const storiesData = [
  {
    id: 1,
    imageUrl: "https://picsum.photos/200/300",
    title: "Transforming Lives Through Education",
    category: "Education",
    date: "Feb 2025",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec risus et odio consectetur fringilla. Cras elementum mauris eget libero suscipit, vel porttitor arcu auctor."
  },
  {
    id: 2,
    imageUrl: "https://picsum.photos/200/300",
    title: "Building Sustainable Communities",
    category: "Community",
    date: "Jan 2025",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec risus et odio consectetur fringilla. Cras elementum mauris eget libero suscipit, vel porttitor arcu auctor."
  },
  {
    id: 3,
    imageUrl: "https://picsum.photos/200/300",
    title: "Empowering Youth Leaders",
    category: "Youth",
    date: "Mar 2025",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec risus et odio consectetur fringilla. Cras elementum mauris eget libero suscipit, vel porttitor arcu auctor."
  }
];

const Stories = () => {
  return (
    <div className={Style.outerContainer}>
      <div className={Style.innercontainer}>
        <div className={Style.headerSection}>
          <div className={Style.titleWrapper}>
            <span className={Style.subtitle}>
              <Heart className={Style.icon} />
              INSPIRING STORIES
            </span>
            <h1 className={Style.sectiontitle}>
              Stories of <span className={Style.highlight}>Impact</span>
            </h1>
            <p className={Style.description}>
              Discover how our initiatives are creating lasting change in communities
              and transforming lives across the nation.
            </p>
          </div>
          <Button 
            text="View All Stories" 
            variant="outline"
            size="medium"
            linkTo="/stories"
          />
        </div>

        <div className={Style.cardcontainer}>
          {storiesData.map(story => (
            <StoryCard
              key={story.id}
              imageUrl={story.imageUrl}
              title={story.title}
              description={story.description}
              category={story.category}
              date={story.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stories;