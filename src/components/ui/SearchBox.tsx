import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useAppDispatch } from "../../store/hook";
import { paginationActions } from "../../store/pagination-slice";
import styles from "./SearchBox.module.scss";
import Button from "./Button";

const Auth: React.FC<{
  className?: string;
}> = (props) => {
  //Variáveis:
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  //Funções:
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const searchTerm = data.get("search") as string;
    if (searchTerm.trim() === "") {
      return;
    } else {
      dispatch(paginationActions.resetSelectedPage());
      navigate("/search?q=" + searchTerm);
    }
  };

  const searchBoxClasses = props.className
    ? `${styles.searchBox} ${props.className}`
    : `${styles.searchBox}`;

  return (
    <form className={searchBoxClasses} onSubmit={onSubmitHandler}>
      <input
        type="text"
        name="search"
        className={styles.searchInput}
        required
      />
      <Button type="submit" className={styles.btnSearch}>
        <FontAwesomeIcon icon="search" />
      </Button>
    </form>
  );
};

export default Auth;
