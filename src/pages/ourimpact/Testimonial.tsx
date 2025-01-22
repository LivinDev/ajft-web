// src/components/Testimonials/Testimonials.tsx
import React from 'react';
import styles from './style.module.css';

interface Testimonial {
  quote: string;
  name: string;
  image: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <section className={styles.testimonials}>
      {testimonials.map((testimonial, index) => (
        <div key={index} className={styles.testimonial}>
          <div className={styles.imageContainer}>
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className={styles.image}
            />
          </div>
          <blockquote className={styles.quote}>{testimonial.quote}</blockquote>
          <cite className={styles.name}>{testimonial.name}</cite>
        </div>
      ))}
    </section>
  );
};

export default Testimonials;
