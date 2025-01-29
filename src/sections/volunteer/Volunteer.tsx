// Volunteer.tsx
import Style from './styles.module.css';
import Button from '../../components/ui/Button';
import { Heart, Users, HandHeart, Sparkles } from 'lucide-react';

const Volunteer = () => {
  const impactStats = [
    {
      icon: <Users className={Style.icon} />,
      count: '1000+',
      label: 'Active Volunteers'
    },
    {
      icon: <Heart className={Style.icon} />,
      count: '50+',
      label: 'Communities Served'
    },
    {
      icon: <HandHeart className={Style.icon} />,
      count: '100+',
      label: 'Ongoing Projects'
    }
  ];

  return (
    <div className={Style.volunsoutersection}>
      <div className={Style.volunsinnersection}>
        <div className={Style.section}>
          <div className={Style.headerSection}>
            <span className={Style.preheading}>
              <Sparkles className={Style.sparkleIcon} />
              MAKE A DIFFERENCE
            </span>
            <p className={Style.subheading}>Join Our Volunteer Community</p>
            <h1 className={Style.heading}>
              Together, We Can Create{' '}
              <span className={Style.highlight}>Lasting Change</span>
            </h1>
            <p className={Style.description}>
              Be part of a passionate community dedicated to creating positive
              impact. Your skills, time, and compassion can transform lives and
              build stronger communities.
            </p>
          </div>

          <div className={Style.statsContainer}>
            {impactStats.map((stat, index) => (
              <div key={index} className={Style.statItem}>
                {stat.icon}
                <span className={Style.statCount}>{stat.count}</span>
                <span className={Style.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>

          <div className={Style.ctaSection}>
            <Button text="Become a Volunteer" size="large" linkTo="/volunteer" />
            <Button 
              text="Learn More" 
              size="large" 
              linkTo="/about-volunteering" 
              outline={true} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;