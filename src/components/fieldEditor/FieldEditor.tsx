import React, { useEffect, useRef } from "react";
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

  const definitions = fieldDefinitions.filter(
    (definition) => !selectedFields.includes(definition)
  );

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
        />
        <List
          id="list_selected_fields"
          title={"Selected Fields"}
          listItems={selectedFields}
        />
      </div>
    </div>
  );
};
