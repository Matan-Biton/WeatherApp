import { createSlice } from "@reduxjs/toolkit";

interface UISliceState {
  theme: "light" | "dark";
}

const initialState: UISliceState = {
  theme: "light",
};

export const UISlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = UISlice.actions;
export default UISlice.reducer;
