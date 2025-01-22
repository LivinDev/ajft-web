
import './style.css';
import FacebookIcon from '../svgs/Facebook';
import InstagramIcon from '../svgs/InstagramIcon';
import TwitterIcon from '../svgs/Twitter';
import LinkedInIcon from '../svgs/LinkedIn';
import { Link } from 'react-router-dom';

function SocialIcons() {
  return (
    <div className="social-icons">
      <Link
        to="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FacebookIcon size={28} />
      </Link>
      <Link
        to="https://www.twitter.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TwitterIcon size={28} />
      </Link>
      <Link
        to="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon size={28} />
      </Link>
      <Link
        to="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon size={28} />
      </Link>
    </div>
  );
}

export default SocialIcons;
