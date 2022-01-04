import React from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ isAuth, element, ...rest }) => {
  // const location = useLocation();
  // const { pathname } = location;

  // guardar el pathname o ruta
  // localStorage.setItem("lastPath", pathname);

  return isAuth ? element : <Navigate to="/auth/login" />;
};

PrivateRoute.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  element: PropTypes.object.isRequired,
};
