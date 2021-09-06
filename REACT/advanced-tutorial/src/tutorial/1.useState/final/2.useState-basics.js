import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("random title");

  const handleClick = () => {
    if (text === "random title") {
      setText("Hello World!");
    } else {
      setText("random title");
    }
  };
  return (
    <React.Fragment>
      <h2>useState basic example.</h2>
      <h2>{text}</h2>
      <button className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
