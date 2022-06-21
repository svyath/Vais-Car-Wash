import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../../Navbar/Navbar";
import { Footer } from "../../Footer/Footer";

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
