import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ForecatsType {
  type: "weather" | "forecast";
  interest: "hourly" | "3days" | "5days";
  data: unknown;
}
const initialState: ForecatsType = {
  type: "weather",
  interest: "hourly",
  data: null,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setInterest: (
      state,
      action: PayloadAction<"hourly" | "3days" | "5days">
    ) => {
      state.interest = action.payload;
      state.type = action.payload === "hourly" ? "weather" : "forecast";
    },
    setData: (state, action: PayloadAction<unknown>) => {
      state.data = action.payload;
    },
  },
});

export const { setInterest, setData } = weatherSlice.actions;
export default weatherSlice.reducer;
