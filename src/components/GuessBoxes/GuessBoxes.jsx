import React from "react";
import "./GuessBoxes.css";

const GuessBoxes = (props) => {
  const isGuessed = props.guessedChar.includes(props.char);
  return <div className="guessbox">{isGuessed ? props.char : ""}</div>;
};

export default GuessBoxes;
