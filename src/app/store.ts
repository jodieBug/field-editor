import { configureStore } from "@reduxjs/toolkit";
import fieldEditorReducer from "../components/fieldEditor/fieldEditorSlice";

export const store = configureStore({
  reducer: {
    fieldEditor: fieldEditorReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
