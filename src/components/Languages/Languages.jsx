import React from "react";
import "./Languages.css";

const Languages = (props) => {
  const style = { backgroundColor: props.bgColor, color: props.textColor };

  return (
    <span style={style} className="language-div">
      {props.name}
    </span>
  );
};

export default Languages;
