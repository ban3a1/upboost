import React from "react";
import ContactsBg from "./ContactsBg";
import Method from "../Payment/Method";
import tg from "../../img/contacts/tg.svg";
import gmail from "../../img/contacts/gmail.svg";
import inst from "../../img/contacts/inst.svg";
import vk from "../../img/contacts/vk.svg";
import Accordion from "../MyAccordion";
import Menu from "../Burger/Menu";
export default function Contacts() {
  return (
    <div className="contacts-page-container">
      <ContactsBg />
      <Menu right={true} />
      <div className="contacts-content-container">
        <div>
          <h2 className="page-title">Контакты</h2>
          <div className="contact-squares">
            <a href="">
              <Method img={tg} />
            </a>
            <a href="">
              <Method img={gmail} />
            </a>
            <a href="">
              <Method img={inst} />
            </a>
            <a href="">
              <Method img={vk} />
            </a>
          </div>
          <div className="faq-container">
            <h2 className="page-title">FAQ - Вопросы и ответы</h2>
            <div className="App">
              <Accordion title="Семантический разбор внешних противодействий станет частью наших традиций">
                <p>
                  Как уже неоднократно упомянуто, действия представителей
                  оппозиции призывают нас к новым свершениям, которые, в свою
                  очередь, должны быть представлены в исключительно
                  положительном свете. Имеется спорная точка зрения, гласящая
                  примерно следующее: представители современных социальных
                  резервов своевременно верифицированы.
                </p>
              </Accordion>
              <Accordion title="Семантический разбор внешних противодействий станет частью наших традиций">
                <p>
                  Как уже неоднократно упомянуто, действия представителей
                  оппозиции призывают нас к новым свершениям, которые, в свою
                  очередь, должны быть представлены в исключительно
                  положительном свете. Имеется спорная точка зрения, гласящая
                  примерно следующее: представители современных социальных
                  резервов своевременно верифицированы.
                </p>
              </Accordion>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
