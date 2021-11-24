import { Fragment } from "react";

import styles from "./Layout.module.scss";
import MainNav from "./MainNav";

const Layout: React.FC<{}> = (props) => {
  return (
    <Fragment>
      <MainNav />
      <main className={styles.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
