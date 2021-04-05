import * as data from "../../response.json";
import { RootState } from "../../app/store";
import { createSlice } from "@reduxjs/toolkit";

interface FieldEditorState {
  fieldDefinitions: string[];
  title: string;
  selectedFields: [];
}

const initialState: FieldEditorState = {
  fieldDefinitions: [],
  title: "",
  selectedFields: [],
};

export const fieldsEditorSlice = createSlice({
  name: "FieldEditor",
  initialState,
  reducers: {
    fetchData: (state) => {
      state.title = data.title;
      state.fieldDefinitions = data.fieldDefinitions;
    },
  },
});

export const selectFieldEditor = (state: RootState) => state.FieldEditor;
export const { fetchData } = fieldsEditorSlice.actions;
