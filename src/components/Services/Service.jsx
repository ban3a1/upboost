import React from "react";
import vk from "../../img/socials/vk.svg";

export default function Service({ img, title }) {
  const hoverClass = title.toLowerCase();
  return (
    <div className={"service " + hoverClass}>
      <img className="service-img" src={img} alt="" />
      <div className="service-text">{title}</div>
    </div>
  );
}
