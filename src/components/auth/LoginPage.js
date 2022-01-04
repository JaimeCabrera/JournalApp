import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { startGoogleLogin, startLoginEmailPassword } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";
import validator from "validator";
import { removeError, setError } from "../../actions/ui";
import { Spinner } from "../ui/Spinner";

export const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { msgError, loading } = useSelector((state) => state.ui);

  const [values, handleInputChange] = useForm({
    email: "admin@admin.com",
    password: "password",
  });

  const { email, password } = values;

  const handleLogin = (e) => {
    e.preventDefault();
    if (isFormValid) {
      dispatch(startLoginEmailPassword(email, password));
      // navigate("/");
    }
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  // validar campos del formulario
  const isFormValid = () => {
    if (!validator.isEmail(email)) {
      dispatch(setError("email is not valid"));
      return false;
    } else if (password.length < 1) {
      dispatch(
        setError("password should be al lest characters and match each other")
      );
      dispatch(removeError());
      return true;
    }
  };
  return (
    <div className="auth__login-container">
      <h3 className="auth__login-title">Login</h3>
      <form className="auth__login-form" onSubmit={handleLogin}>
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
            type="password"
            className="form__input"
            placeholder="password"
            name="password"
            autoComplete="off"
            value={password}
            onChange={handleInputChange}
          />
        </div>
        <div className="login-btn">
          {!loading ? (
            <button type="submit" className="btn btn-primary">
              Ingresar
            </button>
          ) : (
            <Spinner />
          )}
        </div>

        <hr />
        <div className="auth__social-networks">
          <p>Login with social account</p>
          <div className="google-btn" onClick={handleGoogleLogin}>
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
