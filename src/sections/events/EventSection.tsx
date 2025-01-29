// EventSection.tsx
import Style from './style.module.css';
import EventCard from '../../components/ui/cards/EventCard';
import { ngoEvents } from './data';
import { Calendar, ArrowRight } from 'lucide-react';
import Button from '../../components/ui/Button';

const getFirstThreeEvents = (events: any) => {
  return events.slice(0, 3);
};

const firstThreeNgoEvents = getFirstThreeEvents(ngoEvents);

const EventSection = () => {
  return (
    <div className={Style.eventcontainer}>
      <div className={Style.eventmainsection}>
        <div className={Style.sectionHeader}>
          <div className={Style.titleWrapper}>
            <span className={Style.subtitle}>
              <Calendar className={Style.icon} />
              UPCOMING EVENTS
            </span>
            <h1 className={Style.sectiontitle}>
              Making a Difference Through{' '}
              <span className={Style.highlight}>Action</span>
            </h1>
            <p className={Style.description}>
              Join us in our upcoming events and projects where we work together to
              create positive change in our communities.
            </p>
          </div>
          <Button 
            text="View All Events" 
         outline
            size="medium"
            linkTo="/events"
            icon={<ArrowRight size={16} />}
          />
        </div>

        <div className={Style.eventsection}>
          {firstThreeNgoEvents.map((item: any, index: number) => (
            <div className={Style.cardWrapper} key={item.id}>
              <div className={Style.cardNumber}>0{index + 1}</div>
              <EventCard
                heading={item.title}
                image={item.image}
                description={item.description}
                linkTo={`/events/${item.id}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventSection;