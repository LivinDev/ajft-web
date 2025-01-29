import Styles from './style.module.css';
import FounderIMAGE from '../../assets/images/founder.png';
const AboutPage = () => {
  return (
    <div className={Styles.aboutcontainer}>
      <div className={Styles.aboutsection}>
        <h1 className={Styles.heading}>About Anand Jivna Foundation Trust</h1>
        <div className={Styles.detailscontainer}>
          <p className={Styles.content}>
            ANAND JIVAN FOUNDATION TRUST is a Public Charitable Trust Under
            Indian Trust Act 1882. It was Registered on 06th April 2023. The
            Settler of the Foundation is Mr. Guddu Kumar. This Trust is
            Established for Public Charitable Purposes Like Education,
            Healthcare, Women Empowerment, Unemployment, National Pandemic,
            Natural Disasters / Calamities (like flood, Earthquake etc.),
            Cleanliness, Drinking Water and so on. In the Field of Education The
            Foundation is Serving the People in Traditional way for the child
            from Pre-Primary to Class Five. On the other Hand, Our Foundation is
            also giving an Opportunity to have Digital Education up to Class 7th
            .
          </p>

          <p className={Styles.content}>
            Rewind back to 2004 when Dr. Jitender Aggarwal's life and career,
            took a completely different turn. He started losing his vision due
            to a non-treatable concern- Macular Degeneration of retina and
            suddenly his career and life came to a halt. But he knew he can't
            sit and mope.
          </p>

          <h1 className={Styles.pheading}>
            Anand Jivan Foundation Vision 2026
          </h1>
          <div className={Styles.list}>
            <p>• Empowering 10 Million PwDs Across India</p>
            <p>
              • Sustainable Employment and Entrepreneurship for 0.2 Million
              Skilled Youth with Disabilities
            </p>
            <p>
              • Expanding the Civil Society Organization (CSO) Partner Network
              under IDEA
            </p>
            <p>• Supporting Organizations in 50 Developing Countries</p>
            <p>
              • Establishing a State-of-the-Art Global Resource Center in
              Gurugram, India
            </p>
            <p>
              • Participating in the 11th International Abilympics in Finland in
              2027
            </p>
            <p> • Establishing a Corpus of ₹ 100 Crore.</p>
          </div>
        </div>
        <div className={Styles.cardsection}>
          <div className={Styles.topcards}>
            <div className={Styles.card}>
              <h1 className={Styles.cardtitle}>Vision </h1>
              <p className={Styles.carddescription}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                modi vitae quos voluptas assumenda
              </p>
            </div>
            <div className={Styles.card}>
              <h1 className={Styles.cardtitle}>Mission </h1>
              <p className={Styles.carddescription}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                modi vitae quos voluptas assumenda
              </p>
            </div>
            <div className={Styles.card}>
              <h1 className={Styles.cardtitle}>Strategy </h1>
              <p className={Styles.carddescription}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                modi vitae quos voluptas assumenda
              </p>
            </div>
          </div>
          <div className={Styles.bottomsectioncard}>
            <div className={Styles.bottomcard}>
              <div className={Styles.cardtitlebot}>Values</div>
              <p className={Styles.subheading}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                odit.
              </p>
              <div className={Styles.valuesdetails}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                <br />
                quibusdam, odit dolores eos dignissimos ipsum quos natus. Sed
                <br />
                tempora magnam quibusdam cupiditate aperiam velit quae enim
                <br />
                animi atque quisquam! Distinctio, voluptate? Earum minus, quos
                <br />
                nisi voluptatum delectus enim sapiente velit hic perferendis
                <br />
                corporis, atque debitis eaque aliquam autem culpa ut. In officia
                <br />
                atque facilis expedita error quam? Inventore, laborum pariatur?
              </div>
            </div>
            <div className={Styles.bottomcard}>
              <div className={Styles.cardtitlebot}>Values</div>
              <p className={Styles.subheading}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                odit.
              </p>
              <div className={Styles.valuesdetails}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                <br />
                quibusdam, odit dolores eos dignissimos ipsum quos natus. Sed
                <br />
                tempora magnam quibusdam cupiditate aperiam velit quae enim
                <br />
                animi atque quisquam! Distinctio, voluptate? Earum minus, quos
                <br />
                nisi voluptatum delectus enim sapiente velit hic perferendis
                <br />
                corporis, atque debitis eaque aliquam autem culpa ut. In officia
                <br />
                atque facilis expedita error quam? Inventore, laborum pariatur?
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.founderdetails}>
        <div className={Styles.foundersection}>
          <div className={Styles.mainsection}>
            <div className={Styles.founderImage}>
              <img src={FounderIMAGE} alt="founder image" />
            </div>
            <p className={Styles.founderdetails}>
              <h1 className={Styles.foundername}>Mr. Guddu Kumar</h1>
              <p className={Styles.founderstory}>
                I was born in a farmer's house and left for education, but now I
                want to return to my village in Bihar. Many families there still
                struggle to educate their children due to financial
                difficulties, contributing to Bihar's ongoing backwardness. It's
                vital for us, along with the government, to unite and support
                this campaign to help Bihar progress.
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
