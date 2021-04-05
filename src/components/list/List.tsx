import React from "react";

interface Props {
  title: string;
  listItems: string[];
}

export const List: React.FunctionComponent<Props> = ({ title, listItems }) => {
  return (
    <div className="list">
      <p className="listTitle">{title}</p>
      <ul>
        {listItems.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};
