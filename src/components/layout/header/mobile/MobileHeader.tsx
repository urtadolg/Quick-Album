import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";

import styles from "./MobileHeader.module.scss";
import SearchBox from "../../../ui/SearchBox";
import MenuMobile from "./menu/MenuMobile";

const Header: React.FC<{}> = (props) => {
  const [menuIsOpened, setMenuIsOpened] = useState<boolean>(false);
  const location = useLocation();
  const path = location.pathname.slice(1);
  const pageName = path.charAt(0).toUpperCase() + path.slice(1);

  const onBtnMenuClickHandler = (event: React.MouseEvent) => {
    setMenuIsOpened(true);
  };

  const onCloseMenuHandler = () => {
    setMenuIsOpened(false);
  };

  return (
    <div className={styles.container}>
      {menuIsOpened && <MenuMobile closeMenu={onCloseMenuHandler} />}
      <FontAwesomeIcon
        icon="bars"
        className={styles.btnMenu}
        onClick={onBtnMenuClickHandler}
      />
      <span className={styles.title}>{pageName}</span>
      <SearchBox className={styles.searchBox} />
    </div>
  );
};

export default Header;
