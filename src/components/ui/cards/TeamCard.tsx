
import Style from '../../../styles/ui/teamCard.module.css';

interface TeamCardProps {
  name: string;
  photo: string;
  position: string;
  socialMedia: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

const TeamCard: React.FC<TeamCardProps> = ({
  name,
  photo,
  position,
  socialMedia,
}) => {
  console.log(photo);

  return (
    <div className={Style.card}>
      <img src={photo} alt={`${name}'s photo`} className={Style.photo} />
      <h2 className={Style.name}>{name}</h2>
      <p className={Style.position}>{position}</p>
      <div className={Style.socialMedia}>
        {socialMedia.twitter && (
          <a
            href={socialMedia.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        )}
        {socialMedia.linkedin && (
          <a
            href={socialMedia.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        )}
        {socialMedia.github && (
          <a
            href={socialMedia.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
