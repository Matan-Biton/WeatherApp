import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WeatherResponse, ForecastResponse } from "./weatherApi";

interface ForecatsType {
  type: "weather" | "forecast";
  interest: "1-day" | "3-days" | "5-days";
  data: WeatherResponse | ForecastResponse | null;
}
const initialState: ForecatsType = {
  type: "weather",
  interest: "1-day",
  data: null,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setInterest: (
      state,
      action: PayloadAction<"1-day" | "3-days" | "5-days">
    ) => {
      state.interest = action.payload;
      state.type = action.payload === "1-day" ? "weather" : "forecast";
    },
    setData: (state, action: PayloadAction<ForecatsType["data"]>) => {
      state.data = action.payload;
    },
  },
});

export const { setInterest, setData } = weatherSlice.actions;
export default weatherSlice.reducer;
