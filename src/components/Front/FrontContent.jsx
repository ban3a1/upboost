import React from "react";
import front from "../../img/front/front-img.png";
import frontbg from "../../img/front/front-bg.png";

export default function FrontContent() {
  return (
    <div>
      <div className="front-content">
        <div className="main-text">
          <h2>Самое лучшее продвижение ваших социальных сетей</h2>
          <p>
            Представляем широкий спектр услуг в области накрутки и продвижения
            соц. сетей.
          </p>
        </div>

        <div className="front-img-container">
          <img src={front} alt="" className="front-img" />
          <div className="front-img-bg"></div>
        </div>
      </div>
      <div className="front-content-links">
        <a href="/signup" className="btn">
          Зарегистрироваться
        </a>
        <a href="/signin" className="btn">
          Вход
        </a>
      </div>
    </div>
  );
}
