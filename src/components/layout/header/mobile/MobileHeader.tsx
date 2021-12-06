import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./MobileHeader.module.scss";
import SearchBox from "../../../ui/SearchBox";
import MenuMobile from "./menu/MenuMobile";

const Header: React.FC<{}> = (props) => {
  const [menuIsOpened, setMenuIsOpened] = useState<boolean>(false);
  const pageName = "Home";

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
      {pageName}
      <SearchBox className={styles.searchBox} />
    </div>
  );
};

export default Header;
