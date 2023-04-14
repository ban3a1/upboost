import React from "react";
import Advantage from "./Advantage";
import rocket from "../../img/emojis/rocket.png";
import gift from "../../img/emojis/gift.png";
import fire from "../../img/emojis/fire.png";
import diamond from "../../img/emojis/diamond.png";
import money from "../../img/emojis/money.png";
import thunder from "../../img/emojis/thunder.png";
import confetti from "../../img/emojis/confetti.png";
import key from "../../img/emojis/key.png";
import mac from "../../img/emojis/mac.png";

export default function Advantages() {
  return (
    <div className="container">
      <h3 className="sub-title">Наши преимущества</h3>
      <div className="advantages-container">
        <Advantage
          img={rocket}
          title={"Лучшее качество"}
          desc={"За самые низкие цены."}
        />
        <Advantage
          img={gift}
          title={"Раздачи промокодов"}
          desc={"Ежедневные раздачи промокодов с балансом в соц. сетях."}
        />
        <Advantage
          img={fire}
          title={"Онлайн поддержка"}
          desc={"Чат тех. поддержки прямо на сайте."}
        />
        <Advantage
          img={diamond}
          title={"Способы пополнения"}
          desc={"Множество способов пополнения без комиссии."}
        />
        <Advantage
          img={money}
          title={"Моментальный старт"}
          desc={"Все услуги запускаются сразу после создания заказа."}
        />
        <Advantage
          img={thunder}
          title={"Удобный Telegram бот"}
          desc={"Весь сайт в одном боте."}
        />
        <Advantage
          img={confetti}
          title={"Быстрая регистрация"}
          desc={"Без подтверждения почты."}
        />
        <Advantage
          img={key}
          title={"Удобное и быстрое API"}
          desc={
            "Простое api с реальными примерами кода и богатым функционалом."
          }
        />
        <Advantage
          img={mac}
          title={"Лучшее качество"}
          desc={"За самые низкие цены."}
        />
      </div>
    </div>
  );
}
