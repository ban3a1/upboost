import React, { useState } from "react";
import ChoiceMenu from "./components/ChoiceMenu";
import InfoSymbol from "./components/InfoSymbol";
import DropdownInput from "./components/DropdownInput";
import InputWithButtons from "./components/ClickInput";
import Checkout from "./Checkout";

export default function Details() {
  const [isOpen, setIsOpen] = useState(false);

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
    },
    {
      value: "Низкое",
      price: "[0.1₽ за 1 шт.]",
    },
    {
      value: "Среднее",
      price: "[0.25₽ за 1 шт.]",
    },
  ];

  return (
    <div className="details-container">
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
