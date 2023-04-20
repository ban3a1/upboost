import React from "react";
import FormBg from "./FormBg";

export default function SignIn() {
  return (
    <div className="form-window">
      <FormBg />
      <div className="form-container">
        <h2 className="form-title">Создать аккаунт</h2>
        <div className="form-input-container">
          <input className="form-input" type="text" placeholder="Email" />
          <input
            className="form-input"
            type="text"
            placeholder="Реферальный код"
          />
          <input className="form-input" type="password" placeholder="Пароль" />
        </div>
        <div className="rules">
          <div className="rules-text">Регистрируясь, вы принимаете </div>
          <a href="" className="rules-link">
            Правила сервиса
          </a>
        </div>
        <div className="form-btn-container">
          <a className=" btn-form action">Зарегистрироваться</a>
          <a href="/signin" className=" btn-form">
            Войти
          </a>
        </div>
      </div>
    </div>
  );
}
