import React from "react";
import { createPortal } from "react-dom";

import styles from "./MainContent.module.scss";
import { useAppSelector } from "../../store/hook";
import ImageDetails from "../modal/ImageDetails";
import PhotosList from "../photos/PhotosList";
import Pagination from "../ui/Pagination";

const MainContent: React.FC = (props) => {
  //Inicialização de variáveis e states:
  const imageModalIsOpened = useAppSelector(
    (state) => state.img.imageModalOpened
  );

  return (
    <React.Fragment>
      {imageModalIsOpened &&
        createPortal(
          <ImageDetails />,
          document.getElementById("modalPortal") as HTMLElement
        )}
      <div className={styles.header}>
        <h1 className={styles.title}>Seleção do Dia</h1>
      </div>
      <Pagination>
        <PhotosList />
      </Pagination>
    </React.Fragment>
  );
};

export default MainContent;
