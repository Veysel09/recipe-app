import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./../components/nav/Navbar";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import About from "./../pages/about/About";
import Detail from "./../pages/detail/Detail";
import PrivateRouter from "./PrivateRouter";
import LoginProvider from "../context/LoginProvider";
const AppRouter = () => {
  return (
    <LoginProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="about" element={<About />} />

          <Route path="detail" element={<PrivateRouter />}>
            <Route path="" element={<Detail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LoginProvider>
  );
};

export default AppRouter;
