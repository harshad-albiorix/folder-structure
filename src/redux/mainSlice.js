import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setData(state, actions) {
      state.data = actions.payload;
    },
  },
});

export const { setData } = mainSlice.actions;

export default mainSlice.reducer;
