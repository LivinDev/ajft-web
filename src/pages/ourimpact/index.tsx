import  { useEffect, useState } from 'react';
import styles from './style.module.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ImpactPage = () => {
  const [count, setCount] = useState(0);
  const targetCount = 98;

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => {
        if (prevCount < targetCount) {
          return prevCount + 1;
        }
        clearInterval(interval);
        return prevCount;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const impactMetrics = [
    { title: "Lives Impacted", count: "10,000+", icon: "👥" },
    { title: "Projects Completed", count: "150+", icon: "🎯" },
    { title: "Villages Reached", count: "75+", icon: "🏘️" },
    { title: "Success Rate", count: `${count}%`, icon: "📈" }
  ];

  const growthData = [
    { name: '2019', beneficiaries: 2000 },
    { name: '2020', beneficiaries: 4500 },
    { name: '2021', beneficiaries: 6800 },
    { name: '2022', beneficiaries: 8500 },
    { name: '2023', beneficiaries: 10000 }
  ];

  const successStories = [
    {
      id: 1,
      title: "Educational Transformation",
      location: "Rural Bihar",
      impact: "Established 5 digital learning centers",
      beneficiaries: "500+ students",
      description: "Revolutionized education access in remote villages through technology integration and teacher training programs."
    },
    {
      id: 2,
      title: "Women Empowerment Initiative",
      location: "Patna District",
      impact: "Created 20 self-help groups",
      beneficiaries: "300+ women",
      description: "Enabled financial independence through skill development and microfinance support."
    },
    {
      id: 3,
      title: "Healthcare Outreach",
      location: "Multiple Districts",
      impact: "Conducted 100+ health camps",
      beneficiaries: "2000+ patients",
      description: "Provided essential healthcare services and awareness programs in underserved communities."
    }
  ];

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Our Impact</h1>
          <p className={styles.heroSubtitle}>
            Transforming Lives, Building Communities, Creating Lasting Change
          </p>
        </div>
      </section>

      {/* Metrics Section */}
      <section className={styles.metricsSection}>
        <div className={styles.metricsGrid}>
          {impactMetrics.map((metric, index) => (
            <div key={index} className={styles.metricCard}>
              <div className={styles.metricIcon}>{metric.icon}</div>
              <h3 className={styles.metricCount}>{metric.count}</h3>
              <p className={styles.metricTitle}>{metric.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Growth Chart Section */}
      <section className={styles.growthSection}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Our Growth Journey</h2>
          <div className={styles.chartContainer}>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={growthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="beneficiaries" 
                  stroke="#6366f1" 
                  strokeWidth={2}
                  dot={{ fill: '#6366f1', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className={styles.storiesSection}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Success Stories</h2>
          <div className={styles.storiesGrid}>
            {successStories.map(story => (
              <div key={story.id} className={styles.storyCard}>
                <div className={styles.storyContent}>
                  <h3 className={styles.storyTitle}>{story.title}</h3>
                  <p className={styles.storyLocation}>{story.location}</p>
                  <div className={styles.storyImpact}>
                    <div className={styles.impactMetric}>
                      <strong>Impact:</strong> {story.impact}
                    </div>
                    <div className={styles.impactMetric}>
                      <strong>Beneficiaries:</strong> {story.beneficiaries}
                    </div>
                  </div>
                  <p className={styles.storyDescription}>{story.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Be Part of Our Journey</h2>
          <p className={styles.ctaText}>
            Join us in making a difference. Together, we can create positive change.
          </p>
          <button className={styles.ctaButton}>Get Involved</button>
        </div>
      </section>
    </div>
  );
};

export default ImpactPage;