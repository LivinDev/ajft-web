
import { Link } from 'react-router-dom';
import Style from './navbar.module.css';

const Navbar = () => {
  return (
    <div className={Style.navbar}>
      <nav className={Style.innernavbar}>
        <ul className={Style.navlist}>
          <li>
            <Link to="/"> HOME</Link>
          </li>
          <li className={Style.dropdown}>
            <Link to="/"> ABOUT US</Link>
            <ul className={Style.dropdownmenu}>
              <li>
                <Link to="/aboutus">ABOUT US</Link>
              </li>
              <li>
                <Link to="/team">OUR TEAM</Link>
              </li>
              <li>
                <Link to="/certificates">CERTIFICATES</Link>
              </li>
              <li>
                <Link to="/gallery">GALLERY</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/our-impact"> OUR IMPACT</Link>
          </li>
          <li>
            <Link to="/our-area-work"> AREA OF WORK</Link>
          </li>
          <li className={Style.dropdown}>
            <Link to="/event"> EVENTS</Link>
          </li>
          {/* <li>
            <Link to="/"> VISION</Link>
          </li> */}
          <li>
            <Link to="/volunteer"> GET INVOLVED</Link>
          </li>
          {/* <li>
            <Link to="/"> FOUNDATION 2019</Link>
          </li> */}
          <li>
            <Link to="/contact"> CONTACT US</Link>
          </li>
          {/* <li>
            <Link to="/"> NSE</Link>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
