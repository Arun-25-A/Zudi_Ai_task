import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { LoginPage } from "./Components/login/signIn";

function App() {
  return (
    <>
      <Routes>
        <Route element={<LoginPage />} path="/login" />
        <Route element={<LoginPage />} path="/" />
      </Routes>
    </>
  );
}

export default App;
