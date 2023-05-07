import React, { useState } from "react";
import ChoiceMenu from "./components/ChoiceMenu";
import InfoSymbol from "./components/InfoSymbol";
import DropdownInput from "./components/DropdownInput";
import InputWithButtons from "./components/ClickInput";
import Checkout from "./Checkout";
import tg from "../../img/socials/tg.svg";
import youtube from "../../img/socials/youtube.svg";
import vk from "../../img/socials/vk.svg";
import inst from "../../img/socials/inst.svg";
import tiktok from "../../img/socials/tiktok.svg";
import twitter from "../../img/socials/twitter.svg";
import twitch from "../../img/socials/twitch.svg";
import Service from "./Service";

export default function Details() {
  const serviceOptions = [
    "Подписчики",
    "Просмотры",
    "Лайки",
    "Дизлайки",
    "Коментарии",
  ];

  const qualOpt = [
    {
      value: "Высокое",
      price: "[0.5₽ за 1 шт.]",
      index: 0,
    },
    {
      value: "Низкое",
      price: "[0.1₽ за 1 шт.]",
      index: 1,
    },
    {
      value: "Среднее",
      price: "[0.25₽ за 1 шт.]",
      index: 2,
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="details-container">
      <div className="details-mobile-container">
        <h2 className="page-title ">Что будем продвигать?</h2>
        <div className="details-mobile-container-services">
          <Service img={tg} title={"Telegram"} />
          <Service img={youtube} title={"Youtube"} />
          <Service img={vk} title={"VK"} />
          <Service img={inst} title={"Instagram"} />
          <Service img={tiktok} title={"TikTok"} />
          <Service img={twitter} title={"Twitter"} />
          <Service img={twitch} title={"Twitch"} />
        </div>
      </div>

      <h2 className="page-title details-title">Youtube</h2>
      <div className="options-container">
        <div className="service-type">
          <h3 className="service-title">Тип услуги</h3>
          <ChoiceMenu options={serviceOptions} />
        </div>
        <div className="service-quality">
          <div className="service-quality-title-container">
            <h3 className="service-title service-title--quality">Качество</h3>
            <InfoSymbol />
          </div>
          <DropdownInput options={qualOpt} />{" "}
        </div>

        <div className="service-link">
          <h3 className="service-title ">Ссылка</h3>
          <input type="text" name="" id="" className="link-input" />
        </div>
        <div className="service-quantity">
          <h3 className="service-title ">Количество</h3>
          <div className="quantity-container">
            <InputWithButtons />
            <div className="number-text">Макс. 50000 шт.</div>
          </div>
        </div>
      </div>
      <div className="order-container">
        <a
          href="#"
          className="btn btn--order"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          Заказать
        </a>
        <div className="number-text">Итог: 500₽</div>
      </div>
      <Checkout isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
