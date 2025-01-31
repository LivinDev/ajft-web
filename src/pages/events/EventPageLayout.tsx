
import { useParams } from 'react-router-dom';
import { ngoEvents } from '../../sections/events/data';
import styles from './style.module.css';

const EventPageLayout = () => {
  const { id } = useParams<{ id: string }>();
  const event = ngoEvents.find((event) => event.id === parseInt(id || ''));

  if (!event) {
    return (
      <div className={styles.errorContainer}>
        <h2>Event not found</h2>
        <p>The event you're looking for doesn't exist or has been removed.</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <header className={styles.heroSection} style={{ backgroundImage: `url(${event.image})` }}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className={styles.eventMetadata}>
            <div className={styles.metaItem}>
              <i className={styles.icon}>📍</i>
              <span>{event.location}</span>
            </div>
            <div className={styles.metaItem}>
              <i className={styles.icon}>📅</i>
              <span>{event.date}</span>
            </div>
            <div className={styles.metaItem}>
              <i className={styles.icon}>⏰</i>
              <span>{event.time}</span>
            </div>
          </div>
          <h1 className={styles.eventTitle}>{event.title}</h1>
          <button className={styles.registerButton}>Register for Event</button>
        </div>
      </header>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          {/* Event Details */}
          <section className={styles.detailsSection}>
            <div className={styles.imageSection}>
              <img src={event.image} alt={event.title} className={styles.eventImage} />
            </div>
            
            <div className={styles.aboutSection}>
              <h2 className={styles.sectionTitle}>About the Event</h2>
              <p className={styles.description}>{event.description}</p>
              {event.moreText && (
                <p className={styles.moreText}>{event.moreText}</p>
              )}
            </div>
          </section>

          {/* Quick Info */}
          <aside className={styles.eventInfo}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Event Details</h3>
              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Date</span>
                  <span className={styles.infoValue}>{event.date}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Time</span>
                  <span className={styles.infoValue}>{event.time}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Location</span>
                  <span className={styles.infoValue}>{event.location}</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default EventPageLayout;