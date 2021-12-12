import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Photo } from "pexels";

const initialState = {
  isLoadingRequest: false,
  imageModalOpened: false,
  curatedPhotosResponse: [] as Photo[],
  searchPhotosResponse: [] as Photo[],
  favoritePhotos: {
    photosIdList: [] as string[],
    photos: [] as Photo[],
  },
  imageDetails: {} as Photo,
};

const imgSlice = createSlice({
  name: "img",
  initialState: initialState,
  reducers: {
    startLoadingRequest(state) {
      state.isLoadingRequest = true;
    },
    stopLoadingRequest(state) {
      state.isLoadingRequest = false;
    },
    openImageModal(state, action: PayloadAction<Photo>) {
      state.imageModalOpened = true;
      state.imageDetails = action.payload;
    },
    closeImageModal(state) {
      state.imageModalOpened = false;
      state.imageDetails = {} as Photo;
    },
    saveCuratedPhotos(state, actions: PayloadAction<Photo[]>) {
      state.curatedPhotosResponse = actions.payload;
    },
    saveSearchPhotos(state, actions: PayloadAction<Photo[]>) {
      state.searchPhotosResponse = actions.payload;
    },
    saveFavoritePhotos(
      state,
      action: PayloadAction<{ id: string; photo: Photo }>
    ) {
      //Checando se a foto já está na lista de favoritos ou não:
      if (
        !state.favoritePhotos.photosIdList.find(
          (item) => item === action.payload.id
        )
      ) {
        //salvar nova foto na lista
        state.favoritePhotos.photos.push(action.payload.photo);
        state.favoritePhotos.photosIdList.push(action.payload.id);
      } else {
        //encontrar e remover a foto da lista
        const itemIndex = state.favoritePhotos.photos.findIndex(
          (item) => item.id === action.payload.photo.id
        );
        state.favoritePhotos.photos.splice(itemIndex, 1);
        //encontrar e remover id da foto no ID List
        const itemIdIndex = state.favoritePhotos.photosIdList.findIndex(
          (item) => item === action.payload.id
        );
        state.favoritePhotos.photosIdList.splice(itemIdIndex, 1);
      }
    },
  },
});

export const imgActions = imgSlice.actions;
export default imgSlice.reducer;
