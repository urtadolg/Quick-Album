import { Fragment } from "react";

import styles from "./Layout.module.scss";
import Header from "./header/Header";

const Layout: React.FC<{}> = (props) => {
  return (
    <Fragment>
      <Header />
      <main className={styles.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
