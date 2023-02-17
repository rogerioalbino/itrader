import { createSlice } from "@reduxjs/toolkit";

export interface IDrawer { value: boolean };

const initialState: IDrawer = { value: false };

export const drawerSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    openDrawer: (state) => {
      state.value = true;
    },
    closeDrawer: (state) => {
      state.value = false;
    },
  },
});

export const { openDrawer, closeDrawer } = drawerSlice.actions;
export default drawerSlice.reducer;
