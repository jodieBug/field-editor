import React, { useEffect, useRef } from "react";
import {
  fetchData,
  removeField,
  selectField,
  selectFieldEditor,
} from "./fieldEditorSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import styles from "./FieldEditor.module.css";

export const FieldEditor: React.FunctionComponent = () => {
  const { fieldDefinitions, selectedFields, title } = useAppSelector(
    selectFieldEditor
  );

  return (
    <div className={styles.fieldEditor}>
      <div className={styles.title}>{title}</div>
    </div>
  );
};
