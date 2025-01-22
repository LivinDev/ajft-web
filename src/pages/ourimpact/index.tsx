
import Header from './Header';
import Summary from './Summary';
import ImpactMetrics from './ImpactMetrics';
import ProjectDetail from './ProjectDetails';
import Testimonials from './Testimonial';
import styles from './style.module.css';
import Image1 from '../../assets/images/bg-2.jpg';

function ImpactPage() {
  return (
    <div className={styles.app}>
      <Header title="NGO Name" subtitle="Making a difference every day" />
      <Summary description="Our mission is to help people in need through various projects and initiatives." />
      <ImpactMetrics
        metrics={[
          { label: 'People Helped', value: 1234 },
          { label: 'Projects Completed', value: 56 },
          { label: 'Volunteers', value: 789 },
        ]}
      />
      <ProjectDetail
        title="Project Title"
        description="This project aims to improve the lives of people by providing essential resources."
        images={[Image1, Image1, Image1]}
        statistics="Over 500 people benefited from this project."
      />
      <Testimonials
        testimonials={[
          {
            quote: 'Thanks to the NGO, my life has changed for the better.',
            name: 'John Doe',
            image: Image1,
          },
          {
            quote: "I'm proud to be a part of this organization.",
            name: 'Jane Smith',
            image: Image1,
          },
          {
            quote: "I'm proud to be a part of this organization.",
            name: 'Jane Smith',
            image: Image1,
          },
        ]}
      />
    </div>
  );
}

export default ImpactPage;
