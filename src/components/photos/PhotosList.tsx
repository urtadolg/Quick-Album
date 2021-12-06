import React from "react";

import styles from "./PhotosList.module.scss";
import { useAppSelector } from "../../store/hook";
import PhotosItem from "./PhotosItem";

const PhotosPage: React.FC<{}> = (props) => {
  //Inicialização de variáveis e states:
  const photosReceived = useAppSelector(
    (state) => state.img.curatedPhotosResponse
  );

  const PhotosList = photosReceived.map((item) => {
    return <PhotosItem imgDetails={item} key={item.id} />;
  });

  return <section className={styles.imagesContainer}>{PhotosList}</section>;
};

export default PhotosPage;
