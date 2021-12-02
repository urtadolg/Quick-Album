import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createClient,
  ErrorResponse,
  Photos,
  PhotosWithTotalResults,
} from "pexels";

import { PEXELS_API_KEY } from "../credentials/apiKeys";
import { useAppDispatch } from "../store/hook";
import { imgActions } from "../store/img-slice";
import { paginationActions } from "../store/pagination-slice";

const usePexels = () => {
  //Inicialização de variáveis e states:
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  //configurando Pexels API:
  const client = createClient(PEXELS_API_KEY);

  //definindo um type guard:
  function isPhotos(response: Photos | ErrorResponse): response is Photos {
    return (response as Photos).photos !== undefined;
  }

  function isPhotosWithTotalResults(
    response: PhotosWithTotalResults | Photos
  ): response is PhotosWithTotalResults {
    return (response as PhotosWithTotalResults).total_results !== undefined;
  }

  const sendCuratedRequest = async (page?: number, per_page: number = 10) => {
    try {
      dispatch(imgActions.startLoadingRequest());
      const response = await client.photos.curated({ page, per_page });
      dispatch(imgActions.stopLoadingRequest());
      console.log(response);
      if (isPhotos(response)) {
        dispatch(imgActions.saveCuratedPhotos(response.photos));
        dispatch(paginationActions.setCurrentPage(response.page));
        if (isPhotosWithTotalResults(response)) {
          dispatch(
            paginationActions.setTotalPages(
              Math.floor(response.total_results / per_page)
            )
          );
        }
      } else {
        dispatch(imgActions.stopLoadingRequest());
        throw new Error(response.error);
      }
    } catch (error) {
      setErrorMessage("Erro ao acessar o servidor: " + error);
      console.log(error);
    }
  };

  return {
    sendCuratedRequest,
    errorMessage,
  };
};

export default usePexels;
