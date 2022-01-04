import React from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ isAuth, element }) => {
  return !isAuth ? element : <Navigate to="/" />;
};

PublicRoute.propTypes = {
  element: PropTypes.object.isRequired,
};
