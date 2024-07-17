import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import ArticleSlice from "./reducers/article";

export const store = configureStore({
  reducer: {
    [ArticleSlice.name]: ArticleSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
