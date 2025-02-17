// HeroSection.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import styles from "./style.module.css";
import SplitSection from "../splitsection/SplitDesign";
import Image1 from "../../assets/images/hero-1-bg.jpg";
import FounderImage from "../../assets/images/founder.png";
import Image3 from "../../assets/images/health-care-hr.jpg";
import Image2 from "../../assets/images/wom-emb.jpeg";
import Image4 from "../../assets/images/edu-hom.jpeg";
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
            <div className={`${styles.slideContent} ${styles.slideContent2}`}>
              <SplitSection
                subtitle="WOMEN EMPOWERMENT"
                mainTitle="EMPOWERED WOMEN, POWERFUL WORLD."
                paragraph="Women empowerment is about giving women the freedom, confidence, and opportunities to make their own choices. It promotes education, leadership, and gender equality, enabling women to break barriers and achieve success. "
                leftBackgroundImage={Image2}
                rightPersonImage={FounderImage}
                rightTitle="Let's Make Better Life"
                className="custom-section" // optional
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.slide}>
            <div className={`${styles.slideContent} ${styles.slideContent3}`}>
              <SplitSection
                subtitle="HEALTH CARE"
                mainTitle="HEALTH FIRST, LIFE BEST"
                paragraph="Health care is essential for a quality life, ensuring access to medical treatment, preventive care, and well-being support. It focuses on physical, mental, and emotional health, providing necessary care for all. "
                leftBackgroundImage={Image3}
                rightPersonImage={FounderImage}
                rightTitle="Let's Make Better Life"
                className="custom-section" // optional
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide}>
            <div className={`${styles.slideContent} ${styles.slideContent3}`}>
              <SplitSection
                subtitle="EDUCATIONAL Support"
                mainTitle="LEARNING FIRST, FUTURE BEST"
                paragraph="Education is the foundation for a brighter future, ensuring access to quality learning, skill development, and knowledge growth. It empowers individuals, enhances critical thinking, and paves the way for success."
                leftBackgroundImage={Image4}
                rightPersonImage={FounderImage}
                rightTitle="Let's Build a Smarter Tomorrow"
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
