import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GeoLocation {
  longtitude: number;
  latitude: number;
}

interface WeatherState {
  searchBy: "city" | "geoLocation";
  city: string;
  geoLocation: GeoLocation;
  loading: boolean;
}

const initialState: WeatherState = {
  searchBy: "geoLocation",
  city: "",
  geoLocation: { longtitude: 0, latitude: 0 },
  loading: false,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    toggleSearchBy: (state) => {
      state.searchBy = state.searchBy === "city" ? "geoLocation" : "city";
    },
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    setGeoLocation: (state, action: PayloadAction<GeoLocation>) => {
      state.geoLocation = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setCity, setLoading, setGeoLocation, toggleSearchBy } =
  weatherSlice.actions;
export default weatherSlice.reducer;
