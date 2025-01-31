
import styles from './eventstyle.module.css';
import Image1 from '../../assets/images/bg-4.jpg';
import { ngoEvents } from '../../sections/events/data';
import EventCard from '../../components/ui/cards/EventCard';

const EventPage = () => {
  const featuredEvent = {
    title: "Transform Lives Through Education",
    location: "Community Center, Bihar",
    date: "Apr 18-2023",
    time: "8:30 AM IST",
    category: "Education"
  };

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <header
        className={styles.heroSection}
        style={{ backgroundImage: `url(${Image1})` }}
      >
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.eventCategory}>{featuredEvent.category}</span>
          <h1 className={styles.eventTitle}>{featuredEvent.title}</h1>
          <div className={styles.eventMeta}>
            <div className={styles.metaItem}>
              <i className={styles.icon}>📍</i>
              <span>{featuredEvent.location}</span>
            </div>
            <div className={styles.metaItem}>
              <i className={styles.icon}>📅</i>
              <span>{featuredEvent.date}</span>
            </div>
            <div className={styles.metaItem}>
              <i className={styles.icon}>⏰</i>
              <span>{featuredEvent.time}</span>
            </div>
          </div>
          <button className={styles.ctaButton}>Register Now</button>
        </div>
      </header>

      {/* Upcoming Events Section */}
      <section className={styles.eventsSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Upcoming Events</h2>
          <p className={styles.sectionSubtitle}>
            Join us in making a difference in our community through these transformative events
          </p>
        </div>

        <div className={styles.eventGrid}>
          {ngoEvents.map((item) => (
            <div key={item.id} className={styles.eventCardWrapper}>
              <EventCard
                heading={item.title}
                image={item.image}
                description={item.description}
                linkTo={`/events/${item.id}`}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EventPage;