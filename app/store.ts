import AuthenticationApi from "@/apis/authenticationApi";
import HomeApi from "@/apis/HomeApi";
import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: {
    // Add your reducers here
    [AuthenticationApi.reducerPath]: AuthenticationApi.reducer,
    [HomeApi.reducerPath]: HomeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      AuthenticationApi.middleware,
      HomeApi.middleware
    ),

  devTools: process.env.NODE_ENV !== "production",
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
