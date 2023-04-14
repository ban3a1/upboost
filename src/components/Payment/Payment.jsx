import React from "react";
import Method from "./Method";
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

export default function Payment({ img }) {
  return (
    <div className="container payment-container">
      <div className="payment-text-container">
        <h3 className="sub-title">Cпособы пополнения</h3>
        <p className="payment-desc">
          Google pay, Тинькофф, Сбер, Qiwi, BTC, ETH и многое другое
        </p>
      </div>
      <div className="payment-methods-container">
        <Method img={gpay} />
        <Method img={tinkoff} />
        <Method img={t2} />
        <Method img={beeline} />
        <Method img={megafon} />
        <Method img={ltc} />
        <Method img={eth} />
        <Method img={qiwi} />
        <Method img={apple} />
        <Method img={sber} />
        <Method img={lzt} />
        <Method img={mts} />
        <Method img={btc} />
        <Method img={adv} />
      </div>
    </div>
  );
}
