import React from "react";
import styles from "./List.module.css";

interface Props {
  id: string;
  title: string;
  listItems: string[];
  active: string;
  onClick: (field: string) => void;
}

export const List: React.FunctionComponent<Props> = ({
  id,
  title,
  listItems,
  onClick,
  active,
}) => {
  return (
    <div id={id} className={styles.listContainer}>
      <p className={styles.title}>{title}</p>
      <ul className={styles.list}>
        {listItems.map((item, index) => {
          const className =
            item === active
              ? `${styles.active} ${styles.listItem}`
              : styles.listItem;
          return (
            <li key={index} className={className} onClick={() => onClick(item)}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
