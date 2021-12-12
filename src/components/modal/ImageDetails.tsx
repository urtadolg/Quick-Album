import React, { useState } from "react";

import styles from "./ImageDetails.module.scss";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { imgActions } from "../../store/img-slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ImageDetails: React.FC = (props) => {
  //Inicialização de variáveis e states:
  const dispatch = useAppDispatch();
  const imgDetails = useAppSelector((state) => state.img.imageDetails);
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const favoriteIdList = useAppSelector(
    (state) => state.img.favoritePhotos.photosIdList
  );
  const [backdropClasses, setBackdropClasses] = useState<string>(
    `${styles.backdrop}`
  );
  const [modalClasses, setModalClasses] = useState<string>(
    `${styles.modalContainer}`
  );

  //Funções:

  const onCloseHandler = () => {
    setModalClasses(`${styles.modalContainer} ${styles.closeModal}`);
    setBackdropClasses(`${styles.backdrop} ${styles.closeBackdrop}`);
    setTimeout(() => {
      dispatch(imgActions.closeImageModal());
    }, 200);
  };

  const onFavoriteClickHandler = () => {
    if (isLoggedIn) {
      dispatch(
        imgActions.saveFavoritePhotos({
          id: imgDetails.id.toString(),
          photo: imgDetails,
        })
      );
    } else {
      window.alert("Para adicionar uma foto aos favoritos faça o login.");
    }
  };

  //Checando se a foto está na lista de favoritos e alterando a aparência do botão.
  const favoriteBtnClasses = favoriteIdList.find(
    (item) => item === imgDetails.id.toString()
  )
    ? `${styles.favoriteBtn} ${styles.btnActive}`
    : `${styles.favoriteBtn}`;

  return (
    <React.Fragment>
      <div className={backdropClasses} onClick={onCloseHandler} />
      <section className={modalClasses}>
        <img
          src={imgDetails.src.large}
          alt={`Foto tirada por ${imgDetails.photographer}`}
          className={styles.img}
        />

        <p
          className={styles.description}
        >{`Tirada por: ${imgDetails.photographer}.  Dimensões: ${imgDetails.width} x ${imgDetails.height} p`}</p>
        <button className={favoriteBtnClasses} onClick={onFavoriteClickHandler}>
          <FontAwesomeIcon icon="heart" />
        </button>
      </section>
    </React.Fragment>
  );
};

export default ImageDetails;
