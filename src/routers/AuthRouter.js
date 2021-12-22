import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ErrorPage } from '../components/404/ErrorPage'
import { LoginPage } from '../components/auth/LoginPage'
import { RegisterPage } from '../components/auth/RegisterPage'

export const AuthRouter = () => {
  return (
    <div className="auth__main">
      <div className="auth__box_container">

        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* esto es el redirect */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  )
}
