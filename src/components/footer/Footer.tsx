// Footer.tsx
import Style from './style.module.css';
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Youtube, ArrowRight } from 'lucide-react';
import Logo from "../../assets/images/ajftlogo.png"
const Footer = () => {
  const year = new Date().getFullYear();

  const quickLinks = [
    { title: 'About Us', path: '/aboutus' },
    { title: 'Careers', path: '/career' },
    { title: 'Contact Us', path: '/contact' },
    { title: 'Donate Now', path: '/donate' }
  ];

  return (
    <footer className={Style.footerWrapper}>
    

      <div className={Style.outerfooter}>
        <div className={Style.innerfooter}>
          {/* Logo and Mission */}
          <div className={Style.footerSection}>
            <div className={Style.logoWrapper}>
              <img src={Logo} alt="Anand Jivan Foundation Logo" className={Style.footerLogo} />
              <h2 className={Style.org}>Anand Jivan Foundation Trust</h2>
            </div>
            <p className={Style.mission}>
              Empowering communities through sustainable development, education,
            
            </p>
            <a href="/donate" className={Style.donateButton}>
              Support Our Cause
            </a>
          </div>

          {/* Quick Links */}
          <div className={Style.footerSection}>
            <h3>Quick Links</h3>
            <ul className={Style.quickLinks}>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <ArrowRight size={14} />
                  <a href={link.path}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className={Style.footerSection}>
            <h3>Get in Touch</h3>
            <div className={Style.contactInfo}>
              <div className={Style.contactItem}>
                <MapPin size={18} />
                <p>
                  Mabbi Belauna, Post- Lalshahpur,<br />
                  Shahbajpur, Darbhanga<br />
                  Bihar 846005, India
                </p>
              </div>
              <div className={Style.contactItem}>
                <Mail size={18} />
                <a href="mailto:info@ajftrust.org">ajftrusts@gmail.com</a>
              </div>
              <div className={Style.contactItem}>
                <Phone size={18} />
                <a href="tel:06272277721">06272-277721</a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className={Style.footerSection}>
            <h3>Connect With Us</h3>
            <div className={Style.socialLinks}>
              <a  target='_blank' href="https://www.facebook.com/ajftrust"  aria-label="Facebook"><Facebook /></a>
              <a target='_blank'  href="https://x.com/ajmsfoundation" aria-label="Twitter"><Twitter /></a>
              <a  target='_blank' href="https://www.instagram.com/anandjivanfoundation/" aria-label="Instagram"><Instagram /></a>
              <a target='_blank'  href="https://www.instagram.com/anandjivanfoundation/" aria-label="Youtube"><Youtube /></a>
            </div>
            <p className={Style.followText}>Follow us on social media for updates and news</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className={Style.copyright}>
        <div className={Style.copyrightContent}>
          <p>© {year} Anand Jivan Foundation Trust. All Rights Reserved.</p>
          <div className={Style.copyrightLinks}>
            <a href="/privacy-policy">Privacy Policy</a>
          
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;