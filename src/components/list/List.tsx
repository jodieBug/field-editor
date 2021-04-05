import React from "react";

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
    <div id={id} className="list">
      <p className="listTitle">{title}</p>
      <ul>
        {listItems.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};
