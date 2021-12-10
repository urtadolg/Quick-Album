import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

import styles from "./CategoriesPage.module.scss";
import CategoryItem from "./CategoryItem";

const CategoriesPage: React.FC<{}> = (props) => {
  //Variables:
  const navigate = useNavigate();

  //Functions:
  const onClickHandler = (event: React.MouseEvent) => {
    const target = event.currentTarget as HTMLElement;
    const searchTerm = target.id;
    navigate("/search?q=" + searchTerm);
  };

  return (
    <ul className={styles.listContainer}>
      <CategoryItem onClick={onClickHandler} name={"NATURE"}>
        <FontAwesomeIcon icon="leaf" />
      </CategoryItem>
      <CategoryItem
        className={styles.health}
        onClick={onClickHandler}
        name={"HEALTH"}
      >
        <FontAwesomeIcon icon="heartbeat" />
      </CategoryItem>
      <CategoryItem
        className={styles.mar}
        onClick={onClickHandler}
        name={"MAR"}
      >
        <FontAwesomeIcon icon="heartbeat" />
      </CategoryItem>
    </ul>
  );
};

export default CategoriesPage;
