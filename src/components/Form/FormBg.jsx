import React from "react";
import bg1 from "../../img/bg/bg2.png";
import bg2 from "../../img/bg/bg2.png";

export default function Background() {
  return (
    <div className="bg-container">
      <img className="bg1-form" src={bg1}></img>
      <img className="bg2-form" src={bg2}></img>
    </div>
  );
}
