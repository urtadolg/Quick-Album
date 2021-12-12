import { Fragment } from "react";

import styles from "./Layout.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Layout: React.FC<{}> = (props) => {
  return (
    <Fragment>
      <Header />
      <main className={styles.main}>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
