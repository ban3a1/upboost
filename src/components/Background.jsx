import React from "react";
import bg1 from "../img/bg/bg1.png";
import bg2 from "../img/bg/bg2.png";

export default function Background() {
  return (
    <div className="bg-container">
      <img className="bg1" src={bg1}></img>
      <img className="bg2" src={bg2}></img>
      <img className="bg3" src={bg1}></img>
      <img className="bg3-2" src={bg1}></img>

      <img className="bg4" src={bg2}></img>
    </div>
  );
}
