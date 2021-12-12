import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import styles from "./Footer.module.scss";

const Footer: React.FC<{}> = (props) => {
  return (
    <footer className={styles.container}>
      <div className={styles.informationContainer}>
        <h3>Informações</h3>
        <p>
          Todas as fotos são fornecidas pelo{" "}
          <a href="https://www.pexels.com/pt-br/">Pexels</a>
        </p>
      </div>
      <div className={styles.linksContainer}>
        <h3>Links</h3>
        <ul className={styles.links}>
          <li>
            <Link to="/home">Início</Link>
          </li>
          <li>
            <Link to="/categories">Categorias</Link>
          </li>
          <li>
            <Link to="/profile">Login</Link>
          </li>
        </ul>
      </div>
      <div className={styles.aboutUsContainer}>
        <h3>Sobre nós</h3>
        <ul>
          <li>
            <button>Informações</button>
          </li>
          <li>
            <button>Notícias</button>
          </li>
          <li>
            <button>Contato</button>
          </li>
        </ul>
      </div>
      <div className={styles.redesSociaisContainer}>
        <ul className={styles.linksContainer}>
          <li>
            <a href="https://github.com/urtadolg">
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/leandro-urtado/">
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/">
              <FontAwesomeIcon icon={["fab", "facebook"]} />
            </a>
          </li>
        </ul>
        <Button className={styles.btnContato}>Contato</Button>
      </div>
    </footer>
  );
};

export default Footer;
