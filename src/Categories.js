import React from "react";
import "./Categories.css";

function Categories({ title, image }) {
  return (
    <div className="categories">
      <p className="categories__image">{image}</p>
      <p className="categories__title">{title}</p>
    </div>
  );
}

export default Categories;
