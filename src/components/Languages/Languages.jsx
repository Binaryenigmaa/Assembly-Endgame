import React from "react";
import "./Languages.css";

const Languages = (props) => {
  let style = { backgroundColor: props.bgColor, color: props.textColor };

  return (
    <span
      style={style}
      className={`language-div ${props.isDead ? "lost-language" : ""}`}
    >
      {props.name}
    </span>
  );
};

export default Languages;
