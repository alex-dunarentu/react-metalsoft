import React, { useState } from "react";
import FlagHandler from "./FlagHandler";

//hints:
// https://reactjs.org/docs/hooks-reference.html#useeffect

// 1. Make the 'FlagHandler' class handle the save/get functionality for flags using window.localStorage
// 2. Implement he save button
// 3. Implement the print button. Disable the button if the current label has not been found with 'FlagHandler'
// 4. Manage the 'used/not used' user hint
// 5. Implement the delete button for the current label

export default function Test3() {
  const [label, setLabel] = useState("label");
  const [value, setValue] = useState("value");
  const [used, setUsed] = useState(() => {
    return false;
  });
  const flagHandler = new FlagHandler();

  const onSave = () => {
    // use FlagHandler to save the label and value to localStorage
    flagHandler.setFlag(label, value);
    clearInputs();
  };

  const printLabel = () => {
    // alert/print the value of the current label
    const item = flagHandler.getValue(label);
    alert(item);
    console.log(label);
  };

  const onDelete = () => {
    flagHandler.deleteValue(label);
    clearInputs();
  };

  const clearInputs = () => {
    setValue("");
    setLabel("");
    setUsed(false);
  };

  return (
    <div>
      <div
        style={{
          marginBottom: "0.8rem"
        }}
      >
        {"Test3"}

        <br />
        <br />

        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "0.4rem" }}>{"Label:  "}</div>

          <input
            type="text"
            value={label}
            onChange={e => {
              setUsed(!!flagHandler.isSet(e.target.value));
              setLabel(e.target.value);
            }}
          />
        </div>

        <br />
        <br />

        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "0.4rem" }}>{"Value:  "}</div>

          <input
            type="text"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
        </div>

        <br />
        <br />

        <div
          style={{
            color: used ? "green" : "red"
          }}
        >
          {used ? "Used" : "Not used"}
        </div>

        <br />
        <br />

        <button
          style={{
            marginBottom: "0.8rem"
          }}
          onClick={onSave}
        >
          {"Save"}
        </button>

        <button
          disabled={!flagHandler.isSet(label)}
          style={{
            marginBottom: "0.8rem"
          }}
          onClick={printLabel}
        >
          {"Show the value of the current label"}
        </button>

        <button
          style={{
            marginBottom: "0.8rem"
          }}
          onClick={onDelete}
        >
          {"Delete"}
        </button>
      </div>
    </div>
  );
}
