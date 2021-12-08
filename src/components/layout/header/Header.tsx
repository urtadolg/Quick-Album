import styles from "./Header.module.scss";
import MobileHeader from "./mobile/MobileHeader";
import DesktopHeader from "./desktop/DesktopHeader";

const Header: React.FC<{}> = (props) => {
  //Inicialização de variáveis e states:

  //Funções:

  return (
    <header className={styles.headerContainer}>
      <MobileHeader />
      <DesktopHeader />
    </header>
  );
};

export default Header;
