import React from "react";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
  return (
    <div className="auth__login-container">
      <h3 className="auth__login-title">Register</h3>
      <form className="auth__login-form">
        <div className="form__group">
          <input
            type="text"
            className="form__input"
            placeholder="email"
            name="email"
            autoComplete="off"
          />
        </div>
        <div className="form__group">
          <input
            type="text"
            className="form__input"
            placeholder="Name"
            name="name"
            autoComplete="off"
          />
        </div>

        <div className="form__group">
          <input
            type="password"
            className="form__input"
            placeholder="password"
            name="password"
            autoComplete="off"
          />
        </div>
        <div className="form__group">
          <input
            type="password"
            className="form__input"
            placeholder="Confirm password"
            name="confirm_password"
            autoComplete="off"
          />
        </div>
        <button type="submit" className="btn__btn btn__btn-primary">
          Register
        </button>
        <hr />

        <Link className="link" to="/auth/login">
          Already registered?
        </Link>
      </form>
    </div>
  );
};
