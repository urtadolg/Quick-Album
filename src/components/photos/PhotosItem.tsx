import React from "react";

/* import styles from "./PhotosItem.module.scss"; */
import { useAppSelector, useAppDispatch } from "../../store/hook";
import { imgActions } from "../../store/img-slice";
import LoadingImage from "../ui/LoadingImage";
import { Photo } from "pexels";

const PhotosItem: React.FC<{
  imgDetails: Photo;
}> = (props) => {
  //Inicialização de variáveis e states:
  const dispatch = useAppDispatch();
  const isImageLoading = useAppSelector((state) => state.img.isLoadingRequest);

  //Funções:
  const onClickHandler = () => {
    dispatch(imgActions.openImageModal(props.imgDetails));
  };

  return (
    <div>
      {!isImageLoading ? (
        <img
          onClick={onClickHandler}
          alt={`Foto tirada por: ` + props.imgDetails.photographer}
          src={props.imgDetails.src.tiny}
        />
      ) : (
        <LoadingImage />
      )}
    </div>
  );
};

export default PhotosItem;
