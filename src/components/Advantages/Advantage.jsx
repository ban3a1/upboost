import React from "react";
import rocket from "../../img/emojis/rocket.png";

export default function Advantage({ img, title, desc }) {
  return (
    <div className="advantage-container">
      <img src={img} alt="" className="advantage-img" />
      <h3 className="advantage-title">{title}</h3>
      <p className="advantage-desc">{desc}</p>
    </div>
  );
}
