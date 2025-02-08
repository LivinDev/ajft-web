import Style from '../../../styles/ui/teamCard.module.css';

interface TeamCardProps {
  name: string;
  photo: string;
  position: string;
  email: string;
}

const TeamCard: React.FC<TeamCardProps> = ({
  name,
  photo,
  position,
  email,
}) => {
  return (
    <div className={Style.card}>
      <div className={Style.imageWrapper}>
        <img src={photo} alt={`${name}`} className={Style.photo} />
      </div>
      <div className={Style.content}>
        <h2 className={Style.name}>{name}</h2>
        <p className={Style.position}>{position}</p>
        {email && <a href={`mailto:${email}`} className={Style.email}>
          {email}
        </a>}
      </div>
    </div>
  );
};

export default TeamCard;