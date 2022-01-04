import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import validator from "validator";
import { startRegisterWithEmailPasswordName } from "../../actions/auth";
import { removeError, setError } from "../../actions/ui";
import { useForm } from "../../hooks/useForm";

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);
  const [values, handleInputChange] = useForm({
    email: "admin@admin.com",
    name: "admin",
    password: "password",
    password_confirm: "password",
  });

  const { email, name, password, password_confirm } = values;

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startRegisterWithEmailPasswordName(email, password, name));
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError("name is required"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("email is not valid"));

      return false;
    } else if (password !== password_confirm || password.length < 5) {
      dispatch(
        setError("password should be al lest characters and match each other")
      );

      return false;
    }
    dispatch(removeError());
    return true;
  };

  return (
    <div className="auth__login-container">
      <h3 className="auth__login-title">Register</h3>
      <form className="auth__login-form" onSubmit={handleRegister}>
        {msgError && <div className="auth__alert-error">{msgError}</div>}
        <div className="form__group">
          <input
            type="text"
            className="form__input"
            placeholder="email"
            name="email"
            autoComplete="off"
            value={email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form__group">
          <input
            type="text"
            className="form__input"
            placeholder="Name"
            name="name"
            autoComplete="off"
            value={name}
            onChange={handleInputChange}
          />
        </div>

        <div className="form__group">
          <input
            type="password"
            className="form__input"
            placeholder="password"
            name="password"
            autoComplete="off"
            value={password}
            onChange={handleInputChange}
          />
        </div>
        <div className="form__group">
          <input
            type="password"
            className="form__input"
            placeholder="Confirm password"
            name="password_confirm"
            autoComplete="off"
            value={password_confirm}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
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
