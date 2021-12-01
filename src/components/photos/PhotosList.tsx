import React, { useEffect } from "react";

import styles from "./PhotosList.module.scss";
import { useAppSelector, useAppDispatch } from "../../store/hook";
import { imgActions } from "../../store/img-slice";
import PhotosItem from "./PhotosItem";
import Pagination from "../ui/Pagination";

const PhotosPage: React.FC<{}> = (props) => {
  //Inicialização de variáveis e states:
  const dispatch = useAppDispatch();
  const photosReceived = useAppSelector(
    (state) => state.img.curatedPhotosResponse
  );

  //ENVIAR AO MODAL ID PARA RENDERIZAÇÃO DE IMAGEM TAMANHO MÉDIO...

  const onImageClickHandler = (url: string) => {
    dispatch(imgActions.openImageModal(url));
  };

  const PhotosList = photosReceived.map((item) => {
    return (
      <PhotosItem
        onClick={onImageClickHandler}
        urlTiny={item.src.tiny}
        photographer={item.photographer}
        photoId={item.id}
        key={item.id}
      />
    );
  });

  return (
    <Pagination>
      <section className={styles.imagesContainer}>{PhotosList}</section>
    </Pagination>
  );
};

export default PhotosPage;
