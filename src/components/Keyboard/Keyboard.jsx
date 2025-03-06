import React from "react";
import "./Keyboard.css";

const Keyboard = (props) => {
  return <div className="keyboard-keys">{props.keyboardKeys}</div>;
};

export default Keyboard;
