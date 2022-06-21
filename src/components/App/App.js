import React from "react";
import { Routes, Route } from "react-router-dom";
import { NotFound } from "../../pages/NotFound/NotFound";
import { Home } from "../../pages/Home/Home";
import { Booking } from "../../pages/Booking/Booking";
import { AboutUs } from "../../pages/AboutUs/AboutUs";
import { Contact } from "../../pages/Contact/Contact";
import { CarRental } from "../../pages/CarRental/CarRental";
import { Products } from "../../pages/Products/Products";
import { MainLayout } from "../Layouts/MainLayout/MainLayout";
import { AuthLayout } from "../Layouts/AuthLayout/AuthLayout";
import { SignIn } from "../../pages/SignIn/SignIn";
import { SignUp } from "../../pages/SignUp/SignUp";
import { Global } from "@emotion/react";
import { GlobalStyles } from "../../GlobalStyles";

export const App = () => {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="booking" element={<Booking />} />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="carRental" element={<CarRental />} />
          <Route path="products" element={<Products />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
        </Route>
      </Routes>
    </>
  );
};
