import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  isCreatingAccount: boolean;
  isLoggedIn: boolean;
  isLoadingRequest: boolean;
  userToken: string | null;
} = {
  isCreatingAccount: false,
  isLoggedIn: !!localStorage.getItem("token"),
  isLoadingRequest: false,
  userToken: localStorage.getItem("token"),
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    enterCreateAccount(state) {
      state.isCreatingAccount = true;
    },
    leaveCreateAccount(state) {
      state.isCreatingAccount = false;
    },
    login(state, action: PayloadAction<string>) {
      localStorage.setItem("token", action.payload);
      state.userToken = action.payload;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.userToken = null;
      state.isLoggedIn = false;
      localStorage.removeItem("token");
    },
    startLoadingRequest(state) {
      state.isLoadingRequest = true;
    },
    stopLoadingRequest(state) {
      state.isLoadingRequest = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
