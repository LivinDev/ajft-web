
import Style from './eventstyle.module.css';
import Image1 from '../../assets/images/bg-4.jpg';
import { ngoEvents } from '../../sections/events/data';
import EventCard from '../../components/ui/cards/EventCard';

const EventPage = () => {
  return (
    <div>
      <div className={Style.eventPageContainer}>
        <header
          className={Style.eventPageHeader}
          style={{ backgroundImage: `url(${Image1})` }}
        >
          <div className={Style.eventPageHeaderInner}>
            <h1 className={Style.eventPageEventTitle}>
              Lorem, ipsum dolor sit amet consectetur labore!
            </h1>
            <div className={Style.eventPageEventMetadata}>
              <p className={Style.eventPageLocation}>
                lorem strett 68 ksj juier
              </p>
              <p className={Style.eventPageDate}>Apr 18-2023 , 8:30am</p>
            </div>
          </div>
        </header>
        <section className={Style.eventPageEventSection}>
          {ngoEvents.map((item) => (
            <EventCard
              key={item.id}
              heading={item.title}
              image={item.image}
              description={item.description}
              linkTo={`/events/${item.id}`}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default EventPage;
