import Style from './style.module.css';
import { useParams } from 'react-router-dom';
import { ngoEvents } from '../../sections/events/data';

const EventPageLayout = () => {
  const { id } = useParams<{ id: string }>();
  const event = ngoEvents.find((event) => event.id === parseInt(id || ''));

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className={Style.eventcontainer}>
      <div className={Style.header}>
        <div className={Style.headerinner}>
          <h1 className={Style.eventtitle}>{event.title}</h1>
          <div className={Style.eventmetedata}>
            <p className={Style.location}>{event.location}</p>
            <p className={Style.date}>
              {event.date} at {event.time}
            </p>
          </div>
        </div>
      </div>
      <div className={Style.eventsection}>
        <div className={Style.eventImage}>
          <img src={event.image} alt={event.title} />
        </div>
        <div className={Style.aboutevent}>
          <div className={Style.aboutdetails}>
            <h2 className={Style.eventtitle}>About Event</h2>
            <p className={Style.eventdescription}>{event.description}</p>
            <p className={Style.moreText}>{event.moreText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPageLayout;