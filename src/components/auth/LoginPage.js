import React from "react";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("login");
  };

  return (
    <div className="auth__login-container">
      <h3 className="auth__login-title">Login</h3>
      <form className="auth__login-form" onSubmit={handleLogin}>
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
            type="password"
            className="form__input"
            placeholder="password"
            name="password"
            autoComplete="off"
          />
        </div>
        <button type="submit" className="btn__btn btn__btn-primary">
          Ingresar
        </button>
        <hr />
        <div className="auth__social-networks">
          <p>Login with social account</p>
          <div className="google-btn">
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
          <Link className="link" to="/auth/register">
            Create a new Account
          </Link>
        </div>
      </form>
    </div>
  );
};
