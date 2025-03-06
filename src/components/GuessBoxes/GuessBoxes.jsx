import React from "react";
import "./GuessBoxes.css";

const GuessBoxes = (props) => {
  return <div className="guessbox">{props.character}</div>;
};

export default GuessBoxes;
