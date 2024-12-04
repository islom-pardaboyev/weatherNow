import { configureStore } from "@reduxjs/toolkit";

import { api } from "./api";
import { cityNameSlice } from "./slice/city-name-slice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [cityNameSlice.reducerPath]: cityNameSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;