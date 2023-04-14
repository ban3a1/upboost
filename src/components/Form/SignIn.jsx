import React from "react";
import FormBg from "./FormBg";

export default function SignIn() {
  return (
    <div className="form-window">
      <FormBg />
      <div className="form-container">
        <h2 className="form-title">Войти в аккаунт</h2>
        <div className="form-input-container">
          <input className="form-input" type="text" placeholder="Email" />
          <input className="form-input " type="password" placeholder="Пароль" />
          <div className="blanc-text">Заполните поле</div>
          <div className="incorrect-text">Некорректные данные</div>
        </div>

        <a href="/recover" className="forgot-link">
          Забыли пароль?
        </a>
        <a className=" btn-form action">Войти</a>
        <a href="/signup" className=" btn-form">
          Зарегистрироваться
        </a>
      </div>
    </div>
  );
}
