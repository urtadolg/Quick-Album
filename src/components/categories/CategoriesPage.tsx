import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

import styles from "./CategoriesPage.module.scss";
import CategoryItem from "./CategoryItem";

const CategoriesPage: React.FC<{}> = (props) => {
  //Variables:
  const navigate = useNavigate();

  //Functions:
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const onClickHandler = (event: React.MouseEvent) => {
    const target = event.currentTarget as HTMLElement;
    const searchTerm = target.id;
    navigate("/search?q=" + searchTerm);
  };

  return (
    <>
      <h1 className={styles.title}>Categorias</h1>
      <ul className={styles.listContainer}>
        <CategoryItem
          className={styles.natureza}
          onClick={onClickHandler}
          name={"NATUREZA"}
        >
          <FontAwesomeIcon icon="leaf" />
        </CategoryItem>
        <CategoryItem
          className={styles.saude}
          onClick={onClickHandler}
          name={"SAÚDE"}
        >
          <FontAwesomeIcon icon="heartbeat" />
        </CategoryItem>
        <CategoryItem
          className={styles.mar}
          onClick={onClickHandler}
          name={"MAR"}
        >
          <FontAwesomeIcon icon="water" />
        </CategoryItem>
        <CategoryItem
          className={styles.arte}
          onClick={onClickHandler}
          name={"ARTE"}
        >
          <FontAwesomeIcon icon="palette" />
        </CategoryItem>
        <CategoryItem
          className={styles.cidade}
          onClick={onClickHandler}
          name={"CIDADE"}
        >
          <FontAwesomeIcon icon="city" />
        </CategoryItem>
        <CategoryItem
          className={styles.campo}
          onClick={onClickHandler}
          name={"CAMPO"}
        >
          <FontAwesomeIcon icon="tractor" />
        </CategoryItem>
        <CategoryItem
          className={styles.carro}
          onClick={onClickHandler}
          name={"CARRO"}
        >
          <FontAwesomeIcon icon="car" />
        </CategoryItem>
        <CategoryItem
          className={styles.paisagem}
          onClick={onClickHandler}
          name={"PAISAGEM"}
        >
          <FontAwesomeIcon icon="mountain" />
        </CategoryItem>
      </ul>
    </>
  );
};

export default CategoriesPage;
