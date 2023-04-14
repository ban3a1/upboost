import React from "react";
import FormBg from "./FormBg";

export default function SignIn() {
  return (
    <div className="form-window">
      <FormBg />
      <div className="form-container">
        <h2 className="form-title">Восстановить аккаунт</h2>
        <div className="form-input-container">
          <input className="form-input" type="text" placeholder="Email" />
        </div>
        <a className="btn-form action">Восстановить</a>
        <a href="/signin" className="btn-form">
          Вернуться назад
        </a>
      </div>
      <div className="recovery-success">
        На ваш e-mail отправлена информация
      </div>
    </div>
  );
}
