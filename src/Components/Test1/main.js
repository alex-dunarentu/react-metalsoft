import React from "react";
import Wrapper1 from "./Wrapper1";

// hints:
// https://reactjs.org/docs/hooks-reference.html#useimperativehandle
// https://reactjs.org/docs/forwarding-refs.html
// https://reactjs.org/docs/hooks-reference.html#useref

//Details:

// const ref = useRef(null);
// creates a new ref

// the ref can either be used in that component to access a dom element
// <div ref={ref}>
// an now the div can be accessed like ref.current.value or ref.current.something()

// or it can be pased to another component
// <MyComponent ref={ref}
// In order to make a component use the ref you must wrap the component using forwardRed
// export default forwardRef(MyComponent)

// function MyComponent(props, ref)
// the ref can be mounted to an internal dom element or passed to another child component

// any ref can have some methods mounted to it, instead of a dom element using useimperativehandle
// and any method/dom element mounted to that ref can be accesed from any parent component in order to access/change the data

// use this behaviour to either access the dom element and manually change the value
// or create a method to change/access the data using useimperativehandle

// exmaple: ref.current.setValue("working")

export default function Test1() {
  const onClick = () => {
    // this function should change the value of the inner input
    // do not pass the desired value as a prop to the input. Edit Wrapper1 and Wrapper2 to allow this behaviour.
  };

  const onClickAlert = () => {
    // this function should print the value of the input using window.alert
  };

  return (
    <div>
      <div
        style={{
          marginBottom: "0.8rem"
        }}
      >
        {"Test1"}
      </div>

      <button
        style={{
          marginBottom: "0.8rem"
        }}
        onClick={onClick}
      >
        {"Set the value as 'working'"}
      </button>

      <br />

      <button
        style={{
          marginBottom: "0.8rem"
        }}
        onClick={onClickAlert}
      >
        {"Alert the value"}
      </button>

      <Wrapper1 />
    </div>
  );
}
