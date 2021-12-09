import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";

import { useAppSelector } from "../../store/hook";
import styles from "./SearchPage.module.scss";
import SearchBox from "../../components/ui/SearchBox";
import ImageDetails from "../modal/ImageDetails";
import Pagination from "../ui/Pagination";
import PhotosList from "../../components/photos/PhotosList";
import usePexels from "../../hooks/use-pexels";

const SearchPage: React.FC = (props) => {
  //Inicialização de variáveis e states:
  const imageModalIsOpened = useAppSelector(
    (state) => state.img.imageModalOpened
  );
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("q") as string;
  const { sendCuratedRequest, sendSearchRequest, errorMessage } = usePexels();
  const page = useAppSelector((state) => state.pagination.selectedPage);
  const totalImages = useAppSelector((state) => state.pagination.totalImages);

  useEffect(() => {
    sendSearchRequest(searchTerm, page, 40);
  }, [searchTerm, page]);

  return (
    <React.Fragment>
      {imageModalIsOpened &&
        createPortal(
          <ImageDetails />,
          document.getElementById("modalPortal") as HTMLElement
        )}
      <div className={styles.headerContainer}>
        <h1 className={styles.title}>
          Resultados da pesquisa por: <span>"{searchTerm}"</span>
        </h1>
        <h2 className={styles.results}>
          Foram encontradas {totalImages} imagens.
        </h2>
        <SearchBox className={styles.searchBox} />
      </div>
      <Pagination>
        <PhotosList type="search" />
      </Pagination>
    </React.Fragment>
  );
};

export default SearchPage;
