import React, { useState } from "react";
import List from "./List";
import "./style";
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
    { id: "list_element_1", isChecked: false },
    { id: "list_ELEment_2", isChecked: false },
    { id: "list_elemeNT_3", isChecked: false },
    { id: "list_eleMent_4", isChecked: false },
    { id: "list_eLement_5", isChecked: false },
    { id: "list_element_6", isChecked: false }
  ]);
  const onClickPrint = () => {
    // this function should receive the selected values and print them to the console.
    console.log(elements);
  };

  const onClickSelectAll = () => {
    // this function should select all values
    const newElements = elements.map(el => {
      el.isChecked = true;
      return el;
    });
    setElements(newElements);
  };

  const onClickDselectAll = () => {
    // this function should deselect all values
    const newElements = elements.map(el => {
      el.isChecked = false;
      return el;
    });
    setElements(newElements);
  };

  const onClickNewEntry = () => {
    // this function should add a new entry
    // list_element_7, list_element_8, etc.
    setElements(() => [
      ...elements,
      { id: `list_element_${elements.length + 1}`, isChecked: false }
    ]);
  };

  const updateElement = elementId => {
    const newElements = elements.map(e => {
      if (e.id === elementId) {
        e.isChecked = !e.isChecked;
      }
      return e;
    });
    setElements(newElements);
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

        <List items={elements} toggleItem={updateElement} />
        <div className="ButtonsWrapper">
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
    </div>
  );
}
