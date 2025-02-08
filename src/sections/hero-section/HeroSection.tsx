import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import styles from './style.module.css';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <Swiper
        className={styles.swiperContainer}
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        speed={1000} // Controls the transition speed
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        loop={true} // Enable infinite loop
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
    </section>
  );
};

export default HeroSection;