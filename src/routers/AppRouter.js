import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { login } from "../actions/auth";
import { ErrorPage } from "../components/404/ErrorPage";
import { JournalPage } from "../components/journal/JournalPage";
import { AuthRouter } from "./AuthRouter";
import { Spinner } from "../components/ui/Spinner";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {
  // comprueba si el usuario esta autenticado en firebase
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking, setIsAuth]);

  if (checking) {
    return (
      <div className="loading-page">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/auth/*"
            element={<PublicRoute isAuth={isAuth} element={<AuthRouter />} />}
          />
          <Route
            path="/"
            element={<PrivateRoute isAuth={isAuth} element={<JournalPage />} />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
