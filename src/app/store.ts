import {configureStore, ThunkAction, Action, getDefaultMiddleware} from '@reduxjs/toolkit';
import {authApi} from "../services/authApi";
import authReducer from '../features/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer
  },
    middleware: ( getDefaultMiddleware ) => getDefaultMiddleware().concat(authApi.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
