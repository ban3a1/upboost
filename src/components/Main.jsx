import React from "react";
import Front from "./Front/Front";
import Mac from "./Mac/Mac";
import Advantages from "./Advantages/Advantages";
import Payment from "./Payment/Payment";
import Buttons from "./Buttons/Buttons";
import Background from "./Background";

export default function Main() {
  return (
    <div>
      <div className="main-container">
        <Background />
        <Front />
        <Mac />
        <Advantages />
        <Payment />
        <Buttons />
      </div>
    </div>
  );
}
