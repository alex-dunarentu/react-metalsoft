import React from "react";
import List from "./List";

export default function List({ items = null, toggleItem }) {
  const formatText = text => {
    return text;
  };
  return (
    <div>
      {items.map(item => (
        <div>
          <input
            type="checkbox"
            checked={item.isChecked}
            value={item.isChecked}
            onChange={() => toggleItem(item.id)}
          />
          <span> {formatText(item.id)} </span>
        </div>
      ))}
    </div>
  );
}
