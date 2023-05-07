import React, { useState } from "react";
import ChoiceInputImg from "./components/ChoiceInputImg";
import cross from "../../img/cross.svg";
import gpay from "../../img/payment/gpay.png";
import tinkoff from "../../img/payment/tinkoff.png";
import t2 from "../../img/payment/t2.png";
import beeline from "../../img/payment/beeline.png";
import megafon from "../../img/payment/megafon.png";
import ltc from "../../img/payment/ltc.png";
import eth from "../../img/payment/eth.png";
import qiwi from "../../img/payment/qiwi.png";
import apple from "../../img/payment/apple.png";
import sber from "../../img/payment/sber.png";
import lzt from "../../img/payment/lzt.png";
import mts from "../../img/payment/mts.png";
import btc from "../../img/payment/btc.png";
import adv from "../../img/payment/adv.png";

export default function About({ isOpen, setIsOpen }) {
  const checkoutOpt = [
    {
      img: gpay,
      text: "Google pay",
    },
    {
      img: tinkoff,
      text: "Google pay",
    },
    {
      img: t2,
      text: "Google pay",
    },
    {
      img: beeline,
      text: "Google pay",
    },
    {
      img: megafon,
      text: "Google pay",
    },
    {
      img: ltc,
      text: "Google pay",
    },
    {
      img: eth,
      text: "Google pay",
    },
    {
      img: qiwi,
      text: "Google pay",
    },
    {
      img: apple,
      text: "Google pay",
    },
    {
      img: sber,
      text: "Google pay",
    },
    {
      img: lzt,
      text: "Google pay",
    },
    {
      img: mts,
      text: "Google pay",
    },
    {
      img: btc,
      text: "Google pay",
    },
    {
      img: adv,
      text: "Google pay",
    },
  ];
  return (
    <div
      className={
        isOpen
          ? "checkout-window-container checkout-window-container--active"
          : "checkout-window-container"
      }
    >
      <div className="checkout-bg"></div>
      <div className="checkout-container">
        <img
          src={cross}
          alt=""
          className="cross cross--services"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        <div className="checkout-content">
          <h2 className="page-title">YouTube; Подписчики; Высокое качество</h2>
          <div className="checkout-input-container">
            <h3 className="service-title checkout-title">Укажите e-mail</h3>
            <input
              type="text"
              className="checkout-input"
              placeholder="E-mail"
            />
            <h3 className="service-title checkout-title">
              Выберите способ оплаты
            </h3>
            <ChoiceInputImg options={checkoutOpt} />
          </div>
        </div>
      </div>
    </div>
  );
}
