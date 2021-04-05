import * as data from "../../response.json";

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
