import React, { useState } from "react";

import styles from "./ImageDetails.module.scss";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { imgActions } from "../../store/img-slice";

const ImageDetails: React.FC = (props) => {
  //Inicialização de variáveis e states:
  const dispatch = useAppDispatch();
  const imgDetails = useAppSelector((state) => state.img.imageDetails);
  const [backdropClasses, setBackdropClasses] = useState<string>(
    `${styles.backdrop}`
  );
  const [modalClasses, setModalClasses] = useState<string>(
    `${styles.modalContainer}`
  );

  const onCloseHandler = () => {
    setModalClasses(`${styles.modalContainer} ${styles.closeModal}`);
    setBackdropClasses(`${styles.backdrop} ${styles.closeBackdrop}`);
    setTimeout(() => {
      dispatch(imgActions.closeImageModal());
    }, 200);
  };

  return (
    <React.Fragment>
      <div className={backdropClasses} onClick={onCloseHandler} />
      <section className={modalClasses}>
        <img
          src={imgDetails.src.large}
          alt={`Foto tirada por ${imgDetails.photographer}`}
        />

        <p
          className={styles.description}
        >{`Tirada por: ${imgDetails.photographer}.  Dimensões: ${imgDetails.width} x ${imgDetails.height} p`}</p>
      </section>
    </React.Fragment>
  );
};

export default ImageDetails;
