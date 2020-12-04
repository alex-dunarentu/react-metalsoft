import React from "react";
import Wrapper2 from "./Wrapper2";

export default function Wrapper1() {
  return (
    <div
      style={{
        backgroundColor: "red",
        padding: "2rem"
      }}
    >
      <span>{"Wrapper1"}</span>
      <Wrapper2 />
    </div>
  );
}
