import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AuthContextProvider from "./contexts/AuthContext";
import PasswordResetContextProvider from "./contexts/PasswordResetContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <AuthContextProvider>
    <PasswordResetContextProvider>
    <Routes>
      <Route path="/*" element={<App />} />
    </Routes>
    </PasswordResetContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
reportWebVitals();
