import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../../../store/hook";
import { paginationActions } from "../../../../store/pagination-slice";
import { authActions } from "../../../../store/auth-slice";
import styles from "./DesktopHeader.module.scss";

const DesktopHeader: React.FC<{}> = (props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  const onLogoClickHandler = () => {
    dispatch(paginationActions.selectPage(1));
    navigate("/home");
  };

  const onLogoutHandler = () => {
    dispatch(authActions.logout());
  };

  const navLinkActiveStyle = (navLink: { isActive: boolean }) =>
    navLink.isActive ? styles.navLinkActive : "";

  return (
    <div className={styles.container}>
      <span className={styles.logo} onClick={onLogoClickHandler}>
        Quick Album
      </span>
      <nav>
        <ul>
          <li>
            <NavLink className={navLinkActiveStyle} to="/categories">
              Categories
            </NavLink>
          </li>
          {!isLoggedIn && (
            <li>
              <NavLink className={navLinkActiveStyle} to="/auth">
                Login
              </NavLink>
            </li>
          )}
          {isLoggedIn && (
            <>
              <li>
                <NavLink className={navLinkActiveStyle} to="/profile">
                  Profile
                </NavLink>
              </li>
              <li>
                <button onClick={onLogoutHandler} className={styles.btn}>
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default DesktopHeader;
