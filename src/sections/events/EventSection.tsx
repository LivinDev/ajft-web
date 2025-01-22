
import Style from './style.module.css';
import EventCard from '../../components/ui/cards/EventCard';
import { ngoEvents } from './data';

const getFirstThreeEvents = (events: any) => {
  return events.slice(0, 3);
};

const firstThreeNgoEvents = getFirstThreeEvents(ngoEvents);

const EventSection = () => {
  return (
    <div className={Style.eventcontainer}>
      <div className={Style.eventmainsection}>
        <h1 className={Style.sectiontitle}>Event and Projects</h1>
        <div className={Style.eventsection}>
          {firstThreeNgoEvents.map((item: any) => (
            <EventCard
              key={item.id}
              heading={item.title}
              image={item.image}
              description={item.description}
              linkTo={`/events/${item.id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventSection;
