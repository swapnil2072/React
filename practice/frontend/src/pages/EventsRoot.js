import React from "react";
import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";

const EventsRoot = () => {
  return (
    <>
      <MainNavigation></MainNavigation>

      <Outlet />
    </>
  );
};

export default EventsRoot;
