
import HeroSection from '../../sections/hero-section/HeroSection';
import Impact from '../../sections/impact/Impact';
import Stories from '../../sections/stories-impact/Stories';

import TestimonialSlider from '../../sections/testimonial/Testimonial';
import Services from '../../sections/services/Services';
import EventSection from '../../sections/events/EventSection';
import Volunteer from '../../sections/volunteer/Volunteer';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Services />
      <Impact />
      <Stories />
      <EventSection />
      <TestimonialSlider />
      <Volunteer />
    </>
  );
};

export default HomePage;
