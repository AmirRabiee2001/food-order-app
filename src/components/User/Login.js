import React from "react";
import Modal from "../UI/Modal";

const Login = (props) => {
  const validateNumber = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
  };
  return (
    <Modal onClose={props.onHideLogin}>
      <div className="login">
        <h3 className="login__heading">ورود به حساب کاربری</h3>
        <form action="#" className="login__form">
          <div className="form__group">
            <label htmlFor="login-phone">شماره تلفن همراه</label>
            <input type="text" onChange={validateNumber} />
          </div>
          <div className="form__group">
            <label htmlFor="login-phone">رمز عبور</label>
            <input type="password" />
          </div>
          <span className="login__forgotPass">
            رمز عبور تان را فراموش کرده اید؟
          </span>
          <button className="login__btn">ورود</button>
        </form>
        <button className="login__btn">ایجاد حساب کاربری</button>
      </div>
    </Modal>
  );
};

export default Login;
