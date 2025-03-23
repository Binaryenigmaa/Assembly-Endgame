import React from "react";
import "./Keyboard.css";

const Keyboard = (props) => {
  return (
    <div
      className="keyboard-keys"
      style={props.keyStyle}
      onClick={(e) => props.handleClick(e.currentTarget.innerHTML)}
    >
      {props.keyboardKeys}
    </div>
  );
};

export default Keyboard;
