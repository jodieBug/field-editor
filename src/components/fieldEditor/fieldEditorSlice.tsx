import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import * as data from "../../response.json";

interface FieldEditorState {
  fieldDefinitions: string[];
  title: string;
  selectedFields: string[];
}

const initialState: FieldEditorState = {
  fieldDefinitions: [],
  title: "",
  selectedFields: [],
};

export const fieldEditorSlice = createSlice({
  name: "FieldEditor",
  initialState,
  reducers: {
    fetchData: (state) => {
      state.title = data.title;
      state.fieldDefinitions = data.fieldDefinitions;
    },
    selectField: (state, action: PayloadAction<string>) => {
      state.selectedFields.push(action.payload);
    },
    removeField: (state, action: PayloadAction<string>) => {
      state.selectedFields.splice(
        state.selectedFields.indexOf(action.payload),
        1
      );
    },
  },
});

export const selectFieldEditor = (state: RootState) => state.FieldEditor;
export const { fetchData } = fieldsEditorSlice.actions;

export default fieldsEditorSlice.reducer;
