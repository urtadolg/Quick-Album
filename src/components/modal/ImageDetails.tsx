import React from "react";

import styles from "./ImageDetails.module.scss";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { imgActions } from "../../store/img-slice";

const ImageDetails: React.FC = (props) => {
  //Inicialização de variáveis e states:
  const dispatch = useAppDispatch();
  const imgDetails = useAppSelector((state) => state.img.imageDetails);

  const onCloseHandler = () => {
    dispatch(imgActions.closeImageModal());
  };

  return (
    <React.Fragment>
      <div className={styles.backdrop} onClick={onCloseHandler} />
      <section className={styles.modalContainer}>
        <img src={imgDetails.src.large} alt="Teste" />
        <p>{`Tirada por: ${imgDetails.photographer}.  Dimensões: ${imgDetails.width} x ${imgDetails.height}p`}</p>
      </section>
    </React.Fragment>
  );
};

export default ImageDetails;
