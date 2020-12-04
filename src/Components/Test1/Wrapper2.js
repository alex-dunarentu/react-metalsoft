import React from "react";

export default function Wrapper2() {
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
        value="change this value from the main file."
        style={{
          width: "100%"
        }}
      />
    </div>
  );
}
