// Impact.tsx
import { useState, useEffect } from 'react';
import { TrendingUp, Users, Heart, Award } from 'lucide-react';
import './style.css';

interface ImpactData {
  id: number;
  number: number;
  heading: string;
  description: string;
  icon: React.ReactNode;
}

const impactData: ImpactData[] = [
  {
    id: 1,
    number: 100,
    heading: "Early Intervention Services",
    description: "Medically rehabilitated children with special needs",
    icon: <Heart className="impact-icon" />
  },
  {
    id: 2,
    number: 18,
    heading: "Community Outreach",
    description: "Families supported through our programs",
    icon: <Users className="impact-icon" />
  },
  {
    id: 3,
    number: 500,
    heading: "Educational Support",
    description: "Children provided with quality education",
    icon: <Award className="impact-icon" />
  },
  {
    id: 4,
    number: 300,
    heading: "Healthcare Initiatives",
    description: "Medical consultations provided",
    icon: <TrendingUp className="impact-icon" />
  }
];

const Impact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState<number[]>(impactData.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('impact-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const intervals = impactData.map((data, index) => {
        const increment = Math.ceil(data.number / 50);
        return setInterval(() => {
          setCounts(prev => {
            const newCounts = [...prev];
            if (newCounts[index] + increment >= data.number) {
              newCounts[index] = data.number;
              clearInterval(intervals[index]);
            } else {
              newCounts[index] += increment;
            }
            return newCounts;
          });
        }, 30);
      });

      return () => intervals.forEach(interval => clearInterval(interval));
    }
  }, [isVisible]);

  return (
    <div className="outer-container" id="impact-section">
      <div className="gradient-overlay"></div>
      <div className="inner-container">
        <div className="title-section">
          <span className="subtitle">OUR ACHIEVEMENTS</span>
          <h1 className="section-title">Making a Difference</h1>
          <p className="section-description">
            Our impact in numbers reflects our commitment to creating positive change
            in communities across the nation.
          </p>
        </div>

        <div className="impact-section">
          {impactData.map((item, index) => (
            <div className="impact-card" key={item.id}>
              <div className="icon-wrapper">{item.icon}</div>
              <h1 className="num">
                {counts[index].toLocaleString()}+
              </h1>
              <h1 className="heading">{item.heading}</h1>
              <p className="description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Impact;