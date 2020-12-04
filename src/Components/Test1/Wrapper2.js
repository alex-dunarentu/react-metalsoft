import React, { forwardRef } from "react";

const Wrapper2 = (props, ref) => {
  return (
    <div
      style={{
        backgroundColor: "blue",
        padding: "2rem"
      }}
    >
      <div>{"Wrapper2"}</div>

      <br />

      <input
        placeholder="Please insert text ..."
        ref={ref}
        style={{
          width: "100%"
        }}
      />
    </div>
  );
};
export default forwardRef(Wrapper2);
