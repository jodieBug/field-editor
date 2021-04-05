import React, { useEffect, useRef, useState } from "react";
import { List } from "../list/List";
import {
  fetchData,
  removeField,
  selectField,
  selectFieldEditor,
} from "./fieldEditorSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import styles from "./FieldEditor.module.css";

export const FieldEditor: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const { fieldDefinitions, selectedFields, title } = useAppSelector(
    selectFieldEditor
  );
  const [activeField, setActiveField] = useState("");

  const definitions = fieldDefinitions.filter(
    (definition) => !selectedFields.includes(definition)
  );

  const disableButton = (list: string[]) =>
    activeField === "" || !list.includes(activeField);

  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      dispatch(fetchData());
      firstRender.current = false;
    }
  }, []);

  return (
    <div className={styles.fieldEditor}>
      <div className={styles.title}>{title}</div>
      <div className={styles.listContainer}>
        <List
          id="list_definitions"
          title={"Definitions"}
          listItems={definitions}
          onClick={setActiveField}
          active={activeField}
        />
        <div className={styles.buttonContainer}>
          <button disabled={disableButton(definitions)}>{"> Use"}</button>
          <button disabled={disableButton(selectedFields)}>{"< Remove"}</button>
        </div>
        <List
          id="list_selected_fields"
          title={"Selected Fields"}
          listItems={selectedFields}
          onClick={setActiveField}
          active={activeField}
        />
      </div>
    </div>
  );
};
