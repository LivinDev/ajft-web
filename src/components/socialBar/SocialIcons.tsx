
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import './style.css';

const SocialIcons = () => {
  const socialLinks = [
    { icon: Facebook, bgColor: '#3b5998', url: 'https://facebook.com' },
    { icon: Twitter, bgColor: '#1DA1F2', url: 'https://twitter.com' },
    { icon: Linkedin, bgColor: '#0077b5', url: 'https://linkedin.com' },
    { icon: Instagram, bgColor: '#e4405f', url: 'https://www.instagram.com/anandjivanfoundation/' }
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