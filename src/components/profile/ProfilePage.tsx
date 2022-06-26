import React from "react";

import { useAppSelector } from "../../store/hook";
import ImageDetails from "../modal/ImageDetails";
import PhotosItem from "../photos/PhotosItem";
import styles from "./ProfilePage.module.scss";

const ProfilePage: React.FC = (props) => {
  //Variables:
  const imageModalIsOpened = useAppSelector(
    (state) => state.img.imageModalOpened
  );
  const favoriteList = useAppSelector(
    (state) => state.img.favoritePhotos.photos
  );

  //Functions:
  const imageList = favoriteList.map((item) => {
    return (
      <li className={styles.img} key={item.id}>
        <PhotosItem imgDetails={item} />
      </li>
    );
  });

  return (
    <React.Fragment>
      {imageModalIsOpened && <ImageDetails />}
      <div className={styles.profile}>
        <h1>Meus Favoritos</h1>
        {favoriteList.length !== 0 ? (
          <ul className={styles.favoriteList}>{imageList}</ul>
        ) : (
          <p>Nenhuma imagem salva.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default ProfilePage;
