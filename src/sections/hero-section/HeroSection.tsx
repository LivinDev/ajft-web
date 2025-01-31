
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import styles from './style.module.css';

// Import required Swiper styles


const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      {/* Content Side */}
      <div className={styles.contentSide}>
        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>
            Making a Difference <br />
            <span className={styles.highlight}>One Step at a Time</span>
          </h1>
          
          <p className={styles.description}>
            Join us in our mission to create positive change and empower communities. 
            Together, we can build a better future for everyone.
          </p>

          <div className={styles.buttonGroup}>
            <button className={styles.primaryButton}>Get Involved</button>
            <button className={styles.secondaryButton}>Learn More</button>
          </div>

          <div className={styles.statsWrapper}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>10K+</span>
              <span className={styles.statLabel}>Lives Impacted</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>50+</span>
              <span className={styles.statLabel}>Projects</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>15</span>
              <span className={styles.statLabel}>Years of Service</span>
            </div>
          </div>
        </div>
      </div>

      {/* Image Side */}
      <div className={styles.imageSide}>
        <Swiper
          className={styles.swiperContainer}
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
        >
          <SwiperSlide>
            <div className={styles.slideImage1}></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slideImage2}></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slideImage3}></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slideImage4}></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default HeroSection;