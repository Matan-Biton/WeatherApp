import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LocationState {
  inputMethod: "city" | "coordinates";
  city: string;
  coordinates: {
    lat: number | null;
    lon: number | null;
  };
}

const initialState: LocationState = {
  inputMethod: "city",
  city: "",
  coordinates: {
    lat: null,
    lon: null,
  },
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setInputMethod: (state, action: PayloadAction<"city" | "coordinates">) => {
      state.inputMethod = action.payload;
    },
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    setCoordinates: (
      state,
      action: PayloadAction<{
        lat: number | null;
        lon: number | null;
      }>
    ) => {
      state.coordinates = action.payload;
    },
  },
});

export const { setInputMethod, setCity, setCoordinates } =
  locationSlice.actions;
export default locationSlice.reducer;
