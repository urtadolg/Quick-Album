import { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import MobileHeader from "./mobile/MobileHeader";
import DesktopHeader from "./desktop/DesktopHeader";

const Header: React.FC<{}> = (props) => {
  //Inicialização de variáveis e states:
  const [isMobileScreen, setIsMobileScreen] = useState<boolean>(false);

  //Funções:
  window.addEventListener("load", () => {
    setIsMobileScreen(window.outerWidth < 769);
  });

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobileScreen(window.outerWidth < 769);
    });
  }, [isMobileScreen]);

  return (
    <header className={styles.headerContainer}>
      {isMobileScreen ? <MobileHeader /> : <DesktopHeader />}
    </header>
  );
};

export default Header;
