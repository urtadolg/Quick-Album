import React from "react";

import styles from "./ImageDetails.module.scss";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { imgActions } from "../../store/img-slice";

const ImageDetails: React.FC = (props) => {
  //Inicialização de variáveis e states:
  const dispatch = useAppDispatch();
  const imgUrl = useAppSelector((state) => state.img.imageDetails.url);

  const onCloseHandler = () => {
    dispatch(imgActions.closeImageModal());
  };

  return (
    <React.Fragment>
      <div className={styles.backdrop} onClick={onCloseHandler} />
      <section className={styles.modalContainer}>
        <img src={imgUrl} alt="Teste" />
        <details className={styles.detailsContainer}>
          <p>Image Details Here.</p>
        </details>
      </section>
    </React.Fragment>
  );
};

export default ImageDetails;
