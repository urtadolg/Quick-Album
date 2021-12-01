import React from "react";

import styles from "./PhotosItem.module.scss";
import { useAppSelector, useAppDispatch } from "../../store/hook";
import { imgActions } from "../../store/img-slice";

const PhotosItem: React.FC<{
  onClick: (url: string) => void;
  urlTiny: string;
  photoId: number;
  photographer: string;
}> = (props) => {
  //Inicialização de variáveis e states:

  const onClickHandler = () => {
    props.onClick(props.urlTiny);
  };

  return (
    <div onClick={onClickHandler}>
      <img alt={`Foto tirada por: ` + props.photographer} src={props.urlTiny} />
    </div>
  );
};

export default PhotosItem;
