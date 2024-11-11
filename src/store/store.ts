import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weatherSlice";
import uiReducer from "./UISlice";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    ui: uiReducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
