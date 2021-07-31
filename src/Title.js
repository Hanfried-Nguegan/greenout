import React from "react";
import "./Title.css";

function Title({ title, span }) {
  return (
    <div className="title">
      <h3>{title}</h3>
      <div className="title__line"></div>
    </div>
  );
}

export default Title;
