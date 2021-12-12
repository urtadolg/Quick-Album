import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useAppDispatch, useAppSelector } from "../../../../../store/hook";
import { authActions } from "../../../../../store/auth-slice";
import styles from "./MenuMobile.module.scss";
import { useState } from "react";

const MenuMobile: React.FC<{
  closeMenu: () => void;
}> = (props) => {
  //Variables
  const [closeMenu, setCloseMenu] = useState<string>(`${styles.container}`);
  const [closeBackdrop, setCloseBackdrop] = useState<string>(
    `${styles.backdrop}`
  );
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  //Functions
  const onClickHandler = () => {
    setCloseMenu(`${styles.container} ${styles.closeMenu}`);
    setCloseBackdrop(`${styles.backdrop} ${styles.closeBackdrop}`);
    setTimeout(() => {
      props.closeMenu();
    }, 250);
  };

  const onLogoutHandler = () => {
    dispatch(authActions.logout());
    props.closeMenu();
  };

  return (
    <>
      <div className={closeBackdrop} onClick={onClickHandler} />
      <div className={closeMenu}>
        <header>Quick Album</header>
        <nav className={styles.linksContainer}>
          <ul>
            <li>
              <Link onClick={onClickHandler} to="/home">
                <FontAwesomeIcon icon="home" />
                Home
              </Link>
            </li>
            <li onClick={onClickHandler}>
              <Link to="/categories">
                <FontAwesomeIcon icon="th-large" />
                Categorias{" "}
              </Link>
            </li>

            {!isLoggedIn && (
              <li onClick={onClickHandler}>
                <Link to="/auth">
                  <FontAwesomeIcon icon="user" />
                  Login{" "}
                </Link>
              </li>
            )}
            {isLoggedIn && (
              <li onClick={onClickHandler}>
                <Link to="/profile">
                  <FontAwesomeIcon icon="user" />
                  Profile{" "}
                </Link>
              </li>
            )}
          </ul>
          {isLoggedIn && (
            <button className={styles.btnLogout} onClick={onLogoutHandler}>
              <FontAwesomeIcon icon="sign-out-alt" />
              Logout
            </button>
          )}
        </nav>
      </div>
    </>
  );
};

export default MenuMobile;
