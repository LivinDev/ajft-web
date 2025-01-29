// TestimonialSlider.tsx
import Style from './testimonial.module.css';
import Profile from '../../assets/images/bg-2.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Quote } from 'lucide-react';

export interface Testimonial {
  id: number;
  name: string;
  quote: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Community Member',
    quote:
      'Through their dedication and compassion, this organization has transformed countless lives in our community. Their commitment to sustainable development and social empowerment is truly inspiring.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Volunteer',
    quote:
      'Working with this NGO has been an incredible journey. Their grassroots approach to community development and focus on education has created lasting positive change in our society.',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    role: 'Beneficiary',
    quote:
      'The support and guidance I received from this organization changed my life. Their holistic approach to community welfare and dedication to empowering individuals is remarkable.',
  },
  {
    id: 4,
    name: 'Bob Williams',
    role: 'Local Partner',
    quote:
      'This NGO\'s commitment to transparency and their innovative approach to social development sets them apart. Their impact on our community has been profound and lasting.',
  },
];

const TestimonialSlider: React.FC = () => {
  return (
    <div className={Style.outercontainer}>
      <div className={Style.innercontainer}>
        <div className={Style.titleSection}>
          <span className={Style.subtitle}>VOICES OF IMPACT</span>
          <h1 className={Style.title}>What Our Community Says</h1>
          <p className={Style.description}>
            Real stories from the people we serve, our volunteers, and partners who
            are working together to create positive change in our communities.
          </p>
        </div>
        
        <div className={Style.carousel}>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className={Style.testimonialcard}>
                  <div className={Style.quoteIcon}>
                    <Quote size={24} />
                  </div>
                  <div className={Style.text}>{item.quote}</div>
                  <div className={Style.author}>
                    <img src={Profile} alt={item.name} />
                    <div className={Style.authorInfo}>
                      <p className={Style.name}>{item.name}</p>
                      <span className={Style.role}>{item.role}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;