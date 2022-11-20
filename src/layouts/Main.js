import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";

const Main = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <Outlet />
    </div>
  );
};

export default Main;
