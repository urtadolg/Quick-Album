import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth-slice";
import imgReducer from "./img-slice";
import paginationReducer from "./pagination-slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    img: imgReducer,
    pagination: paginationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
