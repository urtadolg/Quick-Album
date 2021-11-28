import { NavLink, useNavigate } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "../../store/hook";
import { authActions } from "../../store/auth-slice";
import styles from "./MainNav.module.scss";
import SearchBox from "../ui/SearchBox";

const MainNav: React.FC<{}> = (props) => {
  //Inicialização de variáveis e states:
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  //Funções:

  const onLogoClickHandler = () => {
    navigate("/");
  };

  const navLinkActiveStyle = (navLink: { isActive: boolean }) =>
    navLink.isActive ? styles.active : "";

  const onLogoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <header className={styles.header}>
      <span className={styles.logo} onClick={onLogoClickHandler}>
        Quick Album
      </span>
      <SearchBox />
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <NavLink className={navLinkActiveStyle} to="/auth">
                Login
              </NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <NavLink className={navLinkActiveStyle} to="/profile">
                {" "}
                Profile{" "}
              </NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={onLogoutHandler} className={styles.btn}>
                Logout
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
