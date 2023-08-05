import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import MainPage from "../Main";
import LoginPage from "../../pages/LoginPage";
import SignupPage from "../../pages/SignupPage";

const Router = () => {
  return (
    <>
      <Switch>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Switch>
    </>
  );
};

export default Router;
