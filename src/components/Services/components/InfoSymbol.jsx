import React, { useState } from "react";
import infoImg from "../../../img/info.svg";

const InfoSymbol = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [infoPosition, setInfoPosition] = useState({ top: 0, left: 0 });

  const handleInfoClick = () => {
    const rect = document.querySelector(".info-symbol").getBoundingClientRect();
    setInfoPosition({ top: rect.top + 20, left: rect.left + 20 });
    setShowInfo(!showInfo);
    console.log(infoPosition);
  };

  return (
    <div className="info-symbol-container">
      <img
        src={infoImg}
        alt=""
        className="info-symbol"
        onClick={handleInfoClick}
      />
      {showInfo && (
        <div className="info-overlay" onClick={handleInfoClick}>
          <div
            className="info-box"
            style={{ top: infoPosition.top, left: infoPosition.left }}
          >
            <div className="info-box-point">
              <h5 className="point-title">Низкое</h5>
              <div className="point-desc">
                Но ключевые особенности структуры проекта преданы
                социально-демократической анафеме.
              </div>
            </div>
            <div className="info-box-point">
              <h5 className="point-title">Среднее</h5>
              <div className="point-desc">
                Имеется спорная точка зрения, гласящая примерно следующее:
                независимые государства неоднозначны.
              </div>
            </div>
            <div className="info-box-point">
              <h5 className="point-title">Высокое</h5>
              <div className="point-desc">
                В рамках спецификации современных стандартов, явные признаки
                победы.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default InfoSymbol;
