import React from "react";
import "./Categories.css";

function Categories({ title }) {
  return (
    <div className="categories">
      <p className="categories__title">{title}</p>
    </div>
  );
}

export default Categories;
