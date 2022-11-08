import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Todo from "./pages/Todo";

export default function Router({ isLoggedIn }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={isLoggedIn ? <Todo /> : <Auth />} />
      </Routes>
    </BrowserRouter>
  );
}
