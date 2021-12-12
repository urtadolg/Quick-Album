import React from "react";
import { useAppSelector } from "../../store/hook";

import styles from "./ProfilePage.module.scss";

const ProfilePage: React.FC = (props) => {
  //Variables:
  const favoriteList = useAppSelector(
    (state) => state.img.favoritePhotos.photos
  );

  //Functions:
  const imageList = favoriteList.map((item) => {
    return (
      <li key={item.id}>
        <img src={item.src.tiny} />
      </li>
    );
  });

  return (
    <div className={styles.profile}>
      <h1>Meus Favoritos</h1>
      {favoriteList.length !== 0 ? (
        <ul className={styles.favoriteList}>{imageList}</ul>
      ) : (
        <p>Nenhuma imagem salva.</p>
      )}
    </div>
  );
};

export default ProfilePage;
