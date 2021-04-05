import * as data from "../../response.json";
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
    
  }
})
