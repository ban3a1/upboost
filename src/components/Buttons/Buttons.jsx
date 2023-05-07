import React from "react";

export default function Buttons() {
  return (
    <div className="bottom-buttons container">
      <div className="front-content-links">
        <a href="/signup" className="btn">
          Зарегистрироваться
        </a>
        <a href="/signin" className="btn">
          Вход
        </a>
      </div>
    </div>
  );
}
