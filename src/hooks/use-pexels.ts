import { useCallback, useState } from "react";
import {
  createClient,
  ErrorResponse,
  Photos,
  PhotosWithTotalResults,
} from "pexels";
import { useAppDispatch } from "../store/hook";
import { imgActions } from "../store/img-slice";
import { paginationActions } from "../store/pagination-slice";

const usePexels = () => {
  //Inicialização de variáveis e states:
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  //configurando Pexels API:
  const client = createClient(`${process.env.REACT_APP_PEXELS_API}`);

  //definindo um type guard:
  function isPhotos(response: Photos | ErrorResponse): response is Photos {
    return (response as Photos).photos !== undefined;
  }

  function isPhotosWithTotalResults(
    response: PhotosWithTotalResults | Photos
  ): response is PhotosWithTotalResults {
    return (response as PhotosWithTotalResults).total_results !== undefined;
  }

  const sendCuratedRequest = useCallback(
    async (page?: number, per_page: number = 15) => {
      try {
        dispatch(imgActions.startLoadingRequest());
        const response = await client.photos.curated({ page, per_page });
        dispatch(imgActions.stopLoadingRequest());
        if (isPhotos(response)) {
          dispatch(imgActions.saveCuratedPhotos(response.photos));
          dispatch(paginationActions.setCurrentPage(response.page));
          if (isPhotosWithTotalResults(response)) {
            dispatch(
              paginationActions.setTotalPages(
                Math.floor(response.total_results / per_page)
              )
            );
            dispatch(paginationActions.setTotalImages(response.total_results));
          }
        } else {
          dispatch(imgActions.stopLoadingRequest());
          throw new Error(response.error);
        }
      } catch (error) {
        setErrorMessage("Erro ao acessar o servidor: " + error);
      }
    },
    []
  );

  const sendSearchRequest = useCallback(
    async (
      query: string,
      page: number = 1,
      per_page: number = 15,
      color: string = "green",
      size: "large" | "medium" | "small" = "small",
      orientation: "landscape" | "portrait" | "square" = "square",
      locale:
        | "en-US"
        | "pt-BR"
        | "es-ES"
        | "ca-ES"
        | "de-DE"
        | "it-IT"
        | "fr-FR"
        | "sv-SE"
        | "id-ID"
        | "pl-PL"
        | "ja-JP"
        | "zh-TW"
        | "zh-CN"
        | "ko-KR"
        | "th-TH"
        | "nl-NL"
        | "hu-HU"
        | "vi-VN"
        | "cs-CZ"
        | "da-DK"
        | "fi-FI"
        | "uk-UA"
        | "el-GR"
        | "ro-RO"
        | "nb-NO"
        | "sk-SK"
        | "tr-TR"
        | "ru-RU" = "pt-BR"
    ) => {
      try {
        dispatch(imgActions.startLoadingRequest());
        const response = await client.photos.search({
          query,
          page,
          per_page,
          color,
          size,
          orientation,
          locale,
        });
        dispatch(imgActions.stopLoadingRequest());
        if (isPhotos(response)) {
          dispatch(imgActions.saveSearchPhotos(response.photos));
          dispatch(paginationActions.setCurrentPage(response.page));
          if (isPhotosWithTotalResults(response)) {
            dispatch(
              paginationActions.setTotalPages(
                Math.floor(response.total_results / per_page)
              )
            );
            dispatch(paginationActions.setTotalImages(response.total_results));
          }
        } else {
          dispatch(imgActions.stopLoadingRequest());
          throw new Error(response.error);
        }
      } catch (error) {
        setErrorMessage("Erro ao acessar o servidor: " + error);
      }
    },
    []
  );

  return {
    sendCuratedRequest,
    sendSearchRequest,
    errorMessage,
  };
};

export default usePexels;
