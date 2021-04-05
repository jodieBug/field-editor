import React from "react";
import styles from "./List.module.css";

interface Props {
  id: string;
  title: string;
  listItems: string[];
}

export const List: React.FunctionComponent<Props> = ({
  id,
  title,
  listItems,
}) => {
  return (
    <div id={id} className={styles.listContainer}>
      <p className={styles.title}>{title}</p>
      <ul className={styles.list}>
        {listItems.map((item, index) => {
          return (
            <li className={styles.listItem} key={index}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
