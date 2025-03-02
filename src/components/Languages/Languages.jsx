import React from "react";
import "./Languages.css";

const Languages = (props) => {
  const style = { backgroundColor: props.bgColor, color: props.textColor };

  return (
    <div style={style} className="language-div">
      {props.name}
    </div>
  );
};

export default Languages;
