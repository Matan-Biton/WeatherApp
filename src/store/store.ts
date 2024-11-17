import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weatherSlice";
import uiReducer from "./UISlice";
import locationReducer from "./locationSlice";
import { weatherApi } from "./weatherApi";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    location: locationReducer,
    ui: uiReducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware),
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
