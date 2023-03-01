import AuthenticationApi from "@/apis/authenticationApi";
import HomeApi from "@/apis/HomeApi";
import skillApi from "@/apis/skillApi";
import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: {
    // Add your reducers here
    [AuthenticationApi.reducerPath]: AuthenticationApi.reducer,
    [HomeApi.reducerPath]: HomeApi.reducer,
    [skillApi.reducerPath]: skillApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      AuthenticationApi.middleware,
      HomeApi.middleware,
      skillApi.middleware
    ),

  devTools: process.env.NODE_ENV !== "production",
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
