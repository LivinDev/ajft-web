// Footer.tsx
import { Link } from 'react-router-dom';
import Style from './style.module.css';
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Youtube, ArrowRight } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  const quickLinks = [
    { title: 'About Us', path: '/about' },
    { title: 'About CEO', path: '/ceo' },
    { title: 'Careers', path: '/careers' },
    { title: 'Contact Us', path: '/contact' },
    { title: 'FAQs', path: '/faqs' },
    { title: 'Donate Now', path: '/donate' }
  ];

  const upcomingEvents = [
    {
      title: 'Community Health Camp',
      date: 'March 15, 2025',
      location: 'Darbhanga'
    },
    {
      title: 'Education Workshop',
      date: 'March 20, 2025',
      location: 'Bihar'
    }
  ];

  return (
    <footer className={Style.footerWrapper}>
    

      <div className={Style.outerfooter}>
        <div className={Style.innerfooter}>
          {/* Organization Info */}
          <div className={Style.footerSection}>
            <h2 className={Style.org}>Anand Jivan Foundation</h2>
            <div className={Style.contactInfo}>
              <div className={Style.contactItem}>
                <MapPin size={18} />
                <p>
                  Mabbi Belauna, Post- Lalshahpur,<br />
                  Shahbajpur, Darbhanga Sector-45,<br />
                  Bihar 846005, India
                </p>
              </div>
              <div className={Style.contactItem}>
                <Mail size={18} />
                <a href="mailto:info@ajftrust.org">info@ajftrust.org</a>
              </div>
              <div className={Style.contactItem}>
                <Phone size={18} />
                <a href="tel:06272277721">06272-277721</a>
              </div>
            </div>
            <div className={Style.socialLinks}>
              <a href="#" aria-label="Facebook"><Facebook /></a>
              <a href="#" aria-label="Twitter"><Twitter /></a>
              <a target='_blank' href="https://www.instagram.com/anandjivanfoundation/" aria-label="Instagram"><Instagram /></a>
              <a href="#" aria-label="Youtube"><Youtube /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={Style.footerSection}>
            <h3>Quick Links</h3>
            <ul className={Style.quickLinks}>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <ArrowRight size={14} />
                  <Link to={link.path}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Upcoming Events */}
          <div className={Style.footerSection}>
            <h3>Upcoming Events</h3>
            <div className={Style.eventsList}>
              {upcomingEvents.map((event, index) => (
                <div key={index} className={Style.eventItem}>
                  <h4>{event.title}</h4>
                  <p>{event.date}</p>
                  <p>{event.location}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mission Statement */}
          <div className={Style.footerSection}>
            <h3>Our Mission</h3>
            <p className={Style.mission}>
              Empowering communities through sustainable development, education,
              and healthcare initiatives to create lasting positive change in society.
            </p>
            <Link to="/donate" className={Style.donateButton}>
              Support Our Cause
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className={Style.copyright}>
        <div className={Style.copyrightContent}>
          <p>© {year} Anand Jivan Foundation Trust. All Rights Reserved.</p>
          <div className={Style.copyrightLinks}>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Use</Link>
            <Link to="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;