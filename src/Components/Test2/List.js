import React from "react";
import List from "./List";

export default function List({ items = null }) {
  const formatText = text => {
    return text;
  };

  return (
    <div>
      {Object.values(items).map(value => (
        <div>
          <input type="checkbox" value={false} />
          <span> {formatText(value)} </span>
        </div>
      ))}
    </div>
  );
}
