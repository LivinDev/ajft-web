// HeroSection.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import styles from "./style.module.css";
import SplitSection from "../splitsection/SplitDesign";
import Image1 from "../../assets/images/hero-1-bg.jpg";
import FounderImage from "../../assets/images/founder.png";
// Don't forget to import Swiper styles in your main component or App.js
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <Swiper
        className={styles.swiperContainer}
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        loop={true}
      >
        <SwiperSlide>
          <div className={styles.slide}>
            <div className={`${styles.slideContent} ${styles.slideContent1}`}>
              <SplitSection
                subtitle="GO GREEN"
                mainTitle="SAVE TREES, SAVE LIFES"
                paragraph="The urgency of environmental conservation cannot be overstated. As the global population continues to grow, the strain on natural resources intensifies, leading to significant environmental challenges."
                leftBackgroundImage={Image1}
                rightPersonImage={FounderImage}
                rightTitle="Let's Make Better Life"
                className="custom-section" // optional
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.slide}>
            <div
              className={`${styles.slideContent} ${styles.slideContent2}`}
            >
              <SplitSection
                subtitle="GO GREEN"
                mainTitle="SAVE TREES, SAVE LIFES"
                paragraph="The urgency of environmental conservation cannot be overstated. As the global population continues to grow, the strain on natural resources intensifies, leading to significant environmental challenges."
                leftBackgroundImage={Image1}
                rightPersonImage={FounderImage}
                rightTitle="Let's Make Better Life"
                className="custom-section" // optional
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.slide}>
            <div
              className={`${styles.slideContent} ${styles.slideContent3}`}
            >
              <SplitSection
                subtitle="GO GREEN"
                mainTitle="SAVE TREES, SAVE LIFES"
                paragraph="The urgency of environmental conservation cannot be overstated. As the global population continues to grow, the strain on natural resources intensifies, leading to significant environmental challenges."
                leftBackgroundImage={Image1}
                rightPersonImage={FounderImage}
                rightTitle="Let's Make Better Life"
                className="custom-section" // optional
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.slide}>
            <div className={`${styles.slideContent} ${styles.slideContent4}`}>
              <SplitSection
                subtitle="GO GREEN"
                mainTitle="SAVE TREES, SAVE LIFES"
                paragraph="The urgency of environmental conservation cannot be overstated. As the global population continues to grow, the strain on natural resources intensifies, leading to significant environmental challenges."
                leftBackgroundImage={Image1}
                rightPersonImage={FounderImage}
                rightTitle="Let's Make Better Life"
                className="custom-section" // optional
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeroSection;
