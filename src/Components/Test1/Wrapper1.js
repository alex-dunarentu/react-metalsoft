import React, { forwardRef } from "react";
import Wrapper2 from "./Wrapper2";

const Wrapper1 = (props, ref) => {
  return (
    <div
      style={{
        backgroundColor: "red",
        padding: "2rem"
      }}
    >
      <span>{"Wrapper1"}</span>
      <Wrapper2 ref={ref} />
    </div>
  );
};
export default forwardRef(Wrapper1);
