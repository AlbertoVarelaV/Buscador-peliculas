import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import moviesReducer from '../reducers/moviesReducer.ts';
import myListReducer from '../reducers/myListReducer.ts';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    myList: myListReducer,
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
