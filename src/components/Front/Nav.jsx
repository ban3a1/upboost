import React from "react";
import logo from "../../img/logo.svg";

import Menu from "../Burger/Menu";

export default function Navigation() {
  return (
    <div className="navigation">
      <img className="logo" src={logo} alt="" />
      <ul className="navigation-pages">
        <li>
          <a className="nav-link" href="/">
            Главная
          </a>
        </li>
        <div className="vert-d"></div>
        <li>
          <a className="nav-link" href="/contacts">
            Контакты
          </a>
        </li>
        <div className="vert-d"></div>
        <li>
          <a className="nav-link" href="/contacts">
            FAQ
          </a>
        </li>
      </ul>
      <a href="/signin" className="nav-btn btn">
        Вход
      </a>
      <div className="burger-container">
        <Menu />
      </div>
    </div>
  );
}
