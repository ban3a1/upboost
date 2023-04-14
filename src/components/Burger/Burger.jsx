import React from "react";

const Burger = ({ open, onClick }) => {
  return (
    <div className="burger" onClick={onClick}>
      <div className={`burger-line ${open ? "open" : ""}`}></div>
      <div className={`burger-line ${open ? "open" : ""}`}></div>
      <div className={`burger-line ${open ? "open" : ""}`}></div>
    </div>
  );
};

export default Burger;
