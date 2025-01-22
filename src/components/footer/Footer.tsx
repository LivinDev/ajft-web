
import Style from './style.module.css';
import { Link } from 'react-router-dom';
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <div className={Style.outerfooter}>
        <footer className={Style.innerfooter}>
          <div className={Style.contactdetails}>
            <h1 className={Style.org}>Anand Jivan Foundation</h1>
            <p className={Style.address}>
              Mabbi Belauna, Post- Lalshahpur <br /> Shahbajpur, Darbhanga
              Sector-45,
              <br /> Bihar 846005, India
            </p>
            <p className={Style.contact}>
              info@ajftrust.org
              <br /> Ph. No.06272-277721
            </p>
          </div>
          <div className={Style.information}>
            <h1 className={Style.infoheading}>Information</h1>
            <ul className={Style.quicklink}>
              <li className={Style.items}>
                <Link className={Style.link} to="">
                  About us
                </Link>
              </li>
              <li className={Style.items}>
                <Link className={Style.link} to="">
                  About CEO
                </Link>
              </li>
              <li className={Style.items}>
                <Link className={Style.link} to="">
                  Career
                </Link>
              </li>
              <li className={Style.items}>
                <Link className={Style.link} to="">
                  Contact us
                </Link>
              </li>
              <li className={Style.items}>
                <Link className={Style.link} to="">
                  F&Q
                </Link>
              </li>
              <li className={Style.items}>
                <Link className={Style.link} to="">
                  Donate now
                </Link>
              </li>
            </ul>
          </div>
          <div className={Style.upcomingevents}>
            <h1 className={Style.infoheading}>Upcoming Event</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            </p>
          </div>
          {/* <div className={Style.youtubevideo}>
            <iframe
              width="100%"
              height="235"
              src="https://www.youtube.com/embed/1j3YP0llTVs?si=3K4hbpbQ9XTkESxC"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div> */}
        </footer>
      </div>
      <footer className={Style.finalfooter}>
        <p>© {year} Anand Jivan Foundation Trust. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
