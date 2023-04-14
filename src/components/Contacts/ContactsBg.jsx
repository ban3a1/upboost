import React from "react";
import bg1 from "../../img/bg/bg2.png";
import bg2 from "../../img/bg/bg2.png";

export default function Background() {
  return (
    <div className="contacts-bg-container">
      <img className="bg1-page" src={bg1}></img>
      <img className="bg2-page" src={bg2}></img>
    </div>
  );
}
