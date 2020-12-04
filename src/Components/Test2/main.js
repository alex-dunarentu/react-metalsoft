import React, { useState } from "react";
import List from "./List";

// hints:
// https://reactjs.org/docs/hooks-reference.html#usestate
// https://reactjs.org/docs/hooks-reference.html#usememo

// You have to make the List component handle the selected values
// 1. Print them in the console by clicking the button

// 2. handle the select/deselect all buttons. - useState

// 3. In the 'List' component change the 'formatText' function to swap underscores (_) with spaces,
// capitalize only the first letter (if it's a letter only),
// and keep other letters in lower case
// list_ELEment_2 => List element 1

// Bonus:
// 4. Move the buttons on different lines and create a pretty style for them

// 5. Optimize the formatText/values avoid extra computing unless the values have been changed - usememo

// 6. Disable all buttons/inputs when a button/input is clicked until the action is done - useState

export default function Test2() {
  const [lastIndex, setLastIndex] = useState(6);
  const [elements, setElements] = useState(() => [
    "list_element_1",
    "list_ELEment_2",
    "list_elemeNT_3",
    "list_eleMent_4",
    "list_eLement_5",
    "list_element_6"
  ]);

  const onClickPrint = () => {
    // this function should receive the selected values and print them to the console.
  };

  const onClickSelectAll = () => {
    // this function should select all values
    console.log("test");
  };

  const onClickDselectAll = () => {
    // this function should deselect all values
  };

  const onClickNewEntry = () => {
    // this function should add a new entry
    // list_element_7, list_element_8, etc.
  };

  return (
    <div>
      <div
        style={{
          marginBottom: "0.8rem"
        }}
      >
        {"Test2"}

        <br />

        <List items={elements} />

        <button
          onClick={onClickPrint}
          style={{
            marginTop: "0.8rem"
          }}
        >
          {"Print the selected elements (array) to console."}
        </button>

        <button
          onClick={onClickSelectAll}
          style={{
            marginTop: "0.8rem"
          }}
        >
          {"Select all."}
        </button>

        <button
          onClick={onClickDselectAll}
          style={{
            marginTop: "0.8rem"
          }}
        >
          {"Deselect all."}
        </button>

        <button
          onClick={onClickNewEntry}
          style={{
            marginTop: "0.8rem"
          }}
        >
          {"Add a new entry."}
        </button>
      </div>
    </div>
  );
}
