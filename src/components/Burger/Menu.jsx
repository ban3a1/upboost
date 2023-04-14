import React, { useState } from "react";
import Burger from "./Burger";
import main from "../../img/burger/main.svg";
import support from "../../img/burger/support.svg";
import about from "../../img/burger/about.svg";
import service from "../../img/burger/service.svg";
import exit from "../../img/burger/exit.svg";

const Menu = ({ right }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={right ? "menu menu--right" : "menu "}>
      <Burger open={open} onClick={open ? handleClose : handleClick} />
      <nav className={open ? "open" : ""}>
        <ul>
          <li>
            <img src={main} alt="" />
            <a href="/">Главная</a>
          </li>
          <li>
            <img src={support} alt="" />
            <a href="#">Поддержка</a>
          </li>
          <li>
            <img src={about} alt="" />
            <a href="/about">О нас</a>
          </li>
          <li>
            <img src={service} alt="" />
            <a href="#">Услуги</a>
          </li>
          <li>
            <img src={exit} alt="" />
            <a href="#">Выйти</a>
          </li>
        </ul>
        <div className="cross" onClick={open ? handleClose : handleClick}>
          <div className="cross-line1"></div>
          <div className="cross-line2"></div>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
