import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./SearchBox.module.scss";
import Button from "./Button";

const Auth: React.FC = (props) => {
  return (
    <form className={styles.searchBox}>
      <input type="text" name="search" />
      <Button type="submit">
        <FontAwesomeIcon icon="search" />
      </Button>
    </form>
  );
};

export default Auth;
