import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";

export default function Router({ isLoggedIn }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={isLoggedIn ? <Home /> : <Auth />} />
      </Routes>
    </BrowserRouter>
  );
}
