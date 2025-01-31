// Navbar.tsx
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './navbar.module.css';

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
    title: 'EVENTS ',
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
  }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = (title: string) => {
    setActiveDropdown(title);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.navWrapper}>
          <button
            onClick={toggleMenu}
            className={styles.mobileMenuButton}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
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

        <div className={`${styles.mobileMenu} ${isOpen ? styles.isOpen : ''}`}>
          {navItems.map((item) => (
            <div key={item.title} className={styles.mobileNavItem}>
              <a
                href={item.href}
                className={styles.mobileNavLink}
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
  );
};

export default Navbar;