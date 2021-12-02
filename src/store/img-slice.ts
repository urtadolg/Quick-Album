import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Photo } from "pexels";

const initialState = {
  isLoadingRequest: false,
  imageModalOpened: false,
  curatedPhotosResponse: [] as Photo[],
  searchPhotosResponse: [] as Photo[],
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
  },
});

export const imgActions = imgSlice.actions;
export default imgSlice.reducer;
