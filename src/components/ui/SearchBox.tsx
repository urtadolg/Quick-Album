import React from "react";

import styles from "./SearchBox.module.scss";
import Button from "./Button";

const Auth: React.FC = (props) => {
  return (
    <form className={styles.searchBox}>
      <input type="text" name="search" />
      <Button type="submit">Search</Button>
    </form>
  );
};

export default Auth;
