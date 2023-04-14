import React from "react";
import Menu from "../Burger/Menu";
import Details from "./Details";
import Service from "./Service";
import ContactsBg from "../Contacts/ContactsBg";
import tg from "../../img/socials/tg.svg";
import youtube from "../../img/socials/youtube.svg";
import vk from "../../img/socials/vk.svg";
import inst from "../../img/socials/inst.svg";
import tiktok from "../../img/socials/tiktok.svg";
import twitter from "../../img/socials/twitter.svg";
import twitch from "../../img/socials/twitch.svg";

export default function Services() {
  return (
    <div>
      <ContactsBg />
      <div className="services-page-container">
        <Menu right={true} />
        <div className="services-content-container">
          <div className="services-container">
            <h2 className="page-title services-title">Что будем продвигать?</h2>
            <Service img={tg} title={"Telegram"} />
            <Service img={youtube} title={"Youtube"} />
            <Service img={vk} title={"VK"} />
            <Service img={inst} title={"Instagram"} />
            <Service img={tiktok} title={"TikTok"} />
            <Service img={twitter} title={"Twitter"} />
            <Service img={twitch} title={"Twitch"} />
          </div>
          <Details />
        </div>
      </div>
    </div>
  );
}
