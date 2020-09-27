import { combineReducers } from "@reduxjs/toolkit";
import * as App from "./slices/app";

export const rootReducer = combineReducers({
  app: App.Slice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
