import React from "react";
import mac from "../../img/mac/mac.png";
import tick from "../../img/mac/tick.png";
import star from "../../img/mac/star.png";
import user from "../../img/mac/user.png";

export default function Mac() {
  return (
    <div className="mac-container container">
      <div className="mac-img-container">
        <div className="mac-img-bg"></div>
        <img src={mac} alt="" className="mac-img" />
        <img src={tick} alt="" className="mac-img-tick" />
        <img src={star} alt="" className="mac-img-star" />
        <img src={user} alt="" className="mac-img-user" />
      </div>
      <div className="main-text">
        <h2>
          Накрутка всего: <br />
          лайков, подписчиков, просмотров
        </h2>
        <p className="mac-p">И ещё много другого.</p>
      </div>
    </div>
  );
}
