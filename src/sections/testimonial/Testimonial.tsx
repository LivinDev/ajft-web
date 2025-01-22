
import Style from './testimonial.module.css';
import Profile from '../../assets/images/bg-2.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';
import { Autoplay, Pagination } from 'swiper/modules';

export interface Testimonial {
  id: number;
  name: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'John Doe',
    quote:
      'Suspendisse Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. ut suscipit est, a ullamcorper ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ut suscipit est, a ullamcorper ipsum.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    quote:
      'Suspendisse Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. ut suscipit est, a ullamcorper ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ut suscipit est, a ullamcorper ipsum.',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    quote:
      'Suspendisse Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. ut suscipit est, a ullamcorper ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ut suscipit est, a ullamcorper ipsum.',
  },
  {
    id: 4,
    name: 'Bob Williams',
    quote:
      'Suspendisse Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. ut suscipit est, a ullamcorper ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ut suscipit est, a ullamcorper ipsum.',
  },
];

const TestimonialSlider: React.FC = () => {
  return (
    <div className={Style.outercontainer}>
      <div className={Style.innercontainer}>
        <h1 className={Style.title}>Testimonial</h1>
        <div className={Style.carousel}>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
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
                  <div className={Style.text}>{item.quote}</div>
                  <div className={Style.author}>
                    <img src={Profile} alt="Person's Name" />
                    <div className={Style.name}>
                      <p>{item.name}</p>
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
