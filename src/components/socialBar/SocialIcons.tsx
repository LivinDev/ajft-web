
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import './style.css';

const SocialIcons = () => {
  const socialLinks = [
    { icon: Facebook, bgColor: '#3b5998', url: 'https://www.facebook.com/ajftrust' },
    { icon: Twitter, bgColor: '#1DA1F2', url: 'https://x.com/ajmsfoundation' },
    { icon: Linkedin, bgColor: '#0077b5', url: 'https://www.linkedin.com/company/anand-jivan-foundation/' },
    { icon: Instagram, bgColor: '#e4405f', url: 'https://www.instagram.com/ajftrusts/' }
  ];

  return (
    <div className="social-icons">
      {socialLinks.map(({ icon: Icon, bgColor, url }) => (
        <a
          key={url}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-link"
          style={{ backgroundColor: bgColor }}
        >
          <Icon className="icon" />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;