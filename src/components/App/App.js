import React from "react";
import { Routes, Route } from "react-router-dom";
import { NotFound } from "../../pages/NotFound/NotFound";
import { Home } from "../../pages/Home/Home";
import { Booking } from "../../pages/Booking/Booking";
import { MainLayout } from "../Layouts/MainLayout/MainLayout";
import { AuthLayout } from "../Layouts/AuthLayout/AuthLayout";
import { SignIn } from "../../pages/SignIn/SignIn";
import { SignUp } from "../../pages/SignUp/SignUp";
import { Global } from "@emotion/react";
import { Container, GlobalStyles } from "../../GlobalStyles";

export const App = () => {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Container>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="booking" element={<Booking />} />
            <Route path="aboutUs" element={<Booking />} />
            <Route path="contact" element={<Booking />} />
            <Route path="carRental" element={<Booking />} />
            <Route path="products" element={<Booking />} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
          </Route>
        </Routes>
      </Container>
    </>
  );
};
