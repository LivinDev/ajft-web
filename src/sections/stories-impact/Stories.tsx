// Stories.tsx
import Style from './style.module.css';
import StoryCard from '../../components/ui/cards/StoryCard';
import { Heart } from 'lucide-react';
import EducationHelp from "../../assets/images/education-help.jpeg"
import FoodHelp from "../../assets/images/food-help.jpeg"
import Image3 from "../../assets/images/youth-leader.png"

const storiesData = [
  {
    id: 1,
    imageUrl: EducationHelp,
    title: "Transforming Lives Through Education",
    category: "Education",
    date: "Feb 2025",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec risus et odio consectetur fringilla. Cras elementum mauris eget libero suscipit, vel porttitor arcu auctor."
  },
  {
    id: 2,
    imageUrl: FoodHelp,
    title: "Building Sustainable Communities",
    category: "Community",
    date: "Jan 2025",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec risus et odio consectetur fringilla. Cras elementum mauris eget libero suscipit, vel porttitor arcu auctor."
  },
  {
    id: 3,
    imageUrl: Image3,
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