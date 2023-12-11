import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import AdminLogin from "./components/login/adminLogin/AdminLogin";
import AdminHome from "./components/admin/AdminHome";
import "./index.css";



const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/login/adminlogin" element={<AdminLogin />} />
      <Route path="/admin/home" element={<AdminHome />} />
    </Routes>
  );
};

export default App;
