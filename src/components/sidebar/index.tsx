// Sidebar.tsx

import styles from './style.module.css';

interface SidebarProps {
  items: { label: string; path: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  return (
    <div className={styles.sidebar}>
      <ul className={styles.sidebarList}>
        {items.map((item, index) => (
          <li key={index} className={styles.sidebarItem}>
            <a href={item.path} className={styles.sidebarLink}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
