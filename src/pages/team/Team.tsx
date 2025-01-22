import TeamCard from '../../components/ui/cards/TeamCard';
import ProfileImage from '../../assets/images/founder.jpg';
import Style from './style.module.css';
import TeamImage from '../../assets/images/team.jpg';
import Volunteer from '../../sections/volunteer/Volunteer';
const teamMembers = [
  {
    name: 'John Doe',
    photo: ProfileImage,
    position: 'Software Engineer',
    socialMedia: {
      twitter: 'https://twitter.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
      github: 'https://github.com/johndoe',
    },
  },
  {
    name: 'John Doe',
    photo: ProfileImage,
    position: 'Software Engineer',
    socialMedia: {
      twitter: 'https://twitter.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
      github: 'https://github.com/johndoe',
    },
  },
  {
    name: 'John Doe',
    photo: ProfileImage,
    position: 'Software Engineer',
    socialMedia: {
      twitter: 'https://twitter.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
      github: 'https://github.com/johndoe',
    },
  },
  {
    name: 'John Doe',
    photo: ProfileImage,
    position: 'Software Engineer',
    socialMedia: {
      twitter: 'https://twitter.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
      github: 'https://github.com/johndoe',
    },
  },
  {
    name: 'John Doe',
    photo: ProfileImage,
    position: 'Software Engineer',
    socialMedia: {
      twitter: 'https://twitter.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
      github: 'https://github.com/johndoe',
    },
  },
  // Add more team members here
];

const TeamSection = () => {
  return (
    <div className={Style.teamcontainer}>
      <div className={Style.innerteamsection}>
        <div className={Style.imgsection}>
          <img src={TeamImage} />
        </div>
        <p className={Style.teamdescription}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem nemo nobis cum atque id sint asperiores possimus quos
          tempore, nulla ipsum illum officia dolores blanditiis iste, adipisci
          aut velit voluptas? Exercitationem nemo nobis cum atque id sint
          asperiores possimus quos tempore, nulla ipsum illum officia dolores
          blanditiis iste, adipisci aut velit voluptas? aut velit voluptas?
          Exercitationem nemo nobis cum atque id sint asperiores possimus quos
          tempore, nulla ipsum illum officia dolores
        </p>
      </div>
      <div className={Style.teamcardcontainer}>
        <div className={Style.innersectionofteam}>
          <h1 className={Style.teamheading}>OUR TEAM</h1>
          <div className={Style.teamcard}>
            {teamMembers.map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
      <Volunteer />
    </div>
  );
};

export default TeamSection;
