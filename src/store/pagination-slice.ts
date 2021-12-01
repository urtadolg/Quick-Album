import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
  selectedPage: 1,
  totalPages: 0,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState: initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    selectPage(state, action: PayloadAction<number>) {
      state.selectedPage = action.payload;
    },
    setTotalPages(state, action: PayloadAction<number>) {
      state.totalPages = action.payload;
    },
  },
});

export const paginationActions = paginationSlice.actions;
export default paginationSlice.reducer;
