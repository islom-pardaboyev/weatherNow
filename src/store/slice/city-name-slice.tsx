import { createSlice } from "@reduxjs/toolkit";

export const cityNameSlice = createSlice({
  name: "cityName",
  initialState: "",
  reducers: {
    setCityName: (_, action) => action.payload,
  },
});

export const { setCityName } = cityNameSlice.actions;