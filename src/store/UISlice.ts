import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UISliceState {
  theme: "light" | "dark";
  showSettings: boolean;
  isLoading: boolean;
  error: string | null;
}

const initialState: UISliceState = {
  theme: "light",
  showSettings: false,
  isLoading: false,
  error: null,
};

export const UISlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    setShowSettings: (state, action: PayloadAction<boolean>) => {
      state.showSettings = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { toggleTheme, setShowSettings, setIsLoading, setError } =
  UISlice.actions;
export default UISlice.reducer;
