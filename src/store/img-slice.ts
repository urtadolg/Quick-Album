import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Photo } from "pexels";

const initialState = {
  imageModalOpened: false,
  curatedPhotosResponse: [] as Photo[],
  imageDetails: {
    url: "",
  },
};

const imgSlice = createSlice({
  name: "img",
  initialState: initialState,
  reducers: {
    openImageModal(state, action: PayloadAction<string>) {
      state.imageModalOpened = true;
      state.imageDetails.url = action.payload;
    },
    closeImageModal(state) {
      state.imageModalOpened = false;
      state.imageDetails.url = "";
    },
    saveCuratedPhotos(state, actions: PayloadAction<Photo[]>) {
      state.curatedPhotosResponse = actions.payload;
    },
  },
});

export const imgActions = imgSlice.actions;
export default imgSlice.reducer;
