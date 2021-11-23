import { NavLink } from "react-router-dom";

import styles from "./MainNav.module.scss";

const MainNav: React.FC<{}> = (props) => {
  return (
    <header className={styles.header}>
      <span className={styles.logo}>Logo</span>
      <nav>
        <ul>
          <li>
            <NavLink
              className={(navLink) => (navLink.isActive ? styles.active : "")}
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li>Link 2</li>
          <li>Link 3</li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
