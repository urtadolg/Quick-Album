import React, { useEffect } from "react";
import { createPortal } from "react-dom";

import styles from "./MainContent.module.scss";
import { useAppSelector } from "../../store/hook";
import ImageDetails from "../modal/ImageDetails";
import PhotosList from "../photos/PhotosList";
import Pagination from "../ui/Pagination";
import SearchBox from "../ui/SearchBox";
import usePexels from "../../hooks/use-pexels";

const MainContent: React.FC = (props) => {
  //Inicialização de variáveis e states:
  const imageModalIsOpened = useAppSelector(
    (state) => state.img.imageModalOpened
  );
  const { sendCuratedRequest } = usePexels();
  const page = useAppSelector((state) => state.pagination.selectedPage);

  useEffect(() => {
    sendCuratedRequest(page, 40);
  }, [page, sendCuratedRequest]);

  return (
    <React.Fragment>
      {imageModalIsOpened &&
        createPortal(
          <ImageDetails />,
          document.getElementById("modalPortal") as HTMLElement
        )}
      <div className={styles.header}>
        <h1 className={styles.title}>Descubra sua inspiração</h1>
        <SearchBox className={styles.searchBox} />
      </div>
      <Pagination>
        <PhotosList type="curated" />
      </Pagination>
    </React.Fragment>
  );
};

export default MainContent;
