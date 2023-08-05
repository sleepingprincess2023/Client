import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import MainPage from "../Main";
import LoginPage from "../../pages/LoginPage";
import SignupPage from "../../pages/SignupPage";
import FacePage from "../../pages/FacePage";

const Router = () => {
  return (
    <>
      <Switch>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/face" element={<FacePage />} />
      </Switch>
    </>
  );
};

export default Router;
