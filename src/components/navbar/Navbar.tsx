import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './navbar.module.css';
import LogoImage from '../../assets/images/ajftlogo.jpg';
interface SubMenuItem {
  title: string;
  href: string;
}

interface MenuItem {
  title: string;
  href: string;
  subItems?: SubMenuItem[];
}

const navItems: MenuItem[] = [
  { 
    title: 'HOME',
    href: '/'
  },
  { 
    title: 'ABOUT US',
    href: '/aboutus',
    subItems: [
      { title: 'About us', href: '/aboutus' },
      { title: 'Governance', href: '/governance' },
      { title: 'Financials', href: '/financials' },
      { title: 'About us', href: '/aboutus' },
      { title: 'Our Team', href: '/team' },
      { title: 'Certificates', href: '/certificates' },
      { title: 'Gallery', href: '/gallery' },
    
    ]
  },
  { 
    title: 'OUR IMPACT',
    href: '/our-impact',
  },
  { 
    title: 'AREAS OF WORK',
    href: '/our-area-work'
  },
  { 
    title: 'EVENTS',
    href: '/events',
    subItems: [
      { title: 'Success Stories', href: '/impact/stories' },
      { title: 'Statistics', href: '/impact/stats' }
    ]
  },
  { 
    title: 'GET INVOLVED',
    href: '/volunteer'
  },
  { 
    title: 'CONTACT US',
    href: '/contact'
  },
    { title: 'CAREER', href: '/career' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menuOpen');
    } else {
      document.body.classList.remove('menuOpen');
    }

    return () => {
      document.body.classList.remove('menuOpen');
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = (title: string) => {
    setActiveDropdown(title);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className={styles.header}>
      <div className={styles.topHeader}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <img src={LogoImage} alt="Anand Jivan Foundation Trust" />
            <div className={styles.logoText}>
              <h1>Anand Jivan Foundation Trust</h1>
              <p>Let's Make Better Life</p>
            </div>
          </div>
          <div className={styles.headerButtons}>
            <a href="/donate" className={styles.donateButton}>Donate Now</a>
            <a href="/login" className={styles.loginButton}>Login</a>
          </div>
        </div>
      </div>

      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <div className={styles.navWrapper}>
            <button
              onClick={toggleMenu}
              className={styles.mobileMenuButton}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? null: <Menu size={24} />}
            </button>

            <div className={styles.desktopMenu}>
              {navItems.map((item) => (
                <div
                  key={item.title}
                  className={styles.navItem}
                  onMouseEnter={() => handleMouseEnter(item.title)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href={item.href}
                    className={styles.navLink}
                    onClick={handleLinkClick}
                  >
                    {item.title}
                  </a>
                  {item.subItems && activeDropdown === item.title && (
                    <div className={styles.dropdown}>
                      {item.subItems.map((subItem) => (
                        <a
                          key={subItem.title}
                          href={subItem.href}
                          className={styles.dropdownItem}
                          onClick={handleLinkClick}
                        >
                          {subItem.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`${styles.mobileMenu} ${isOpen ? styles.isOpen : ''}`}>
          <button
            onClick={toggleMenu}
            className={styles.mobileCloseButton}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          <div className={styles.mobileMenuContent}>
            {navItems.map((item) => (
              <div key={item.title} className={styles.mobileNavItem}>
                <a
                  href={item.href}
                  className={styles.mobileNavLink}
                  onClick={handleLinkClick}
                >
                  {item.title}
                </a>
                {item.subItems && (
                  <div className={styles.mobileDropdown}>
                    {item.subItems.map((subItem) => (
                      <a
                        key={subItem.title}
                        href={subItem.href}
                        className={styles.mobileDropdownItem}
                        onClick={handleLinkClick}
                      >
                        {subItem.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;