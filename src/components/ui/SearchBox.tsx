import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./SearchBox.module.scss";
import Button from "./Button";

const Auth: React.FC = (props) => {
  const navigate = useNavigate();

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    /* console.log(event.target[0].value); */ //ler o valor do search e estabelecer fetch com api
    navigate("/search");
  };

  return (
    <form className={styles.searchBox} onSubmit={onSubmitHandler}>
      <input type="text" name="search" />
      <Button type="submit">
        <FontAwesomeIcon icon="search" />
      </Button>
    </form>
  );
};

export default Auth;
