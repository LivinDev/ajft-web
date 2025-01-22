
import Style from './style.module.css';
import StoryCard from '../../components/ui/cards/StoryCard';
const Stories = () => {
  return (
    <div className={Style.outerContainer}>
      <div className={Style.innercontainer}>
        <h1 className={Style.sectiontite}>Stories of Impact</h1>
        <div className={Style.cardcontainer}>
          <StoryCard
            imageUrl="https://picsum.photos/200/300"
            title="Story 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec risus et odio consectetur fringilla. Cras elementum mauris eget libero suscipit, vel porttitor arcu auctor. Nulla dictum dolor eget felis porta auctor. Suspendisse vestibulum tortor id viverra fermentum."
          />
          <StoryCard
            imageUrl="https://picsum.photos/200/300"
            title="Story 2"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec risus et odio consectetur fringilla. Cras elementum mauris eget libero suscipit, vel porttitor arcu auctor. Nulla dictum dolor eget felis porta auctor. Suspendisse vestibulum tortor id viverra fermentum."
          />
          <StoryCard
            imageUrl="https://picsum.photos/200/300"
            title="Story 2"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec risus et odio consectetur fringilla. Cras elementum mauris eget libero suscipit, vel porttitor arcu auctor. Nulla dictum dolor eget felis porta auctor. Suspendisse vestibulum tortor id viverra fermentum."
          />
        </div>
      </div>
    </div>
  );
};

export default Stories;
