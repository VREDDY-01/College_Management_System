import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import AdminLogin from "./components/login/adminLogin/AdminLogin";
import AdminHome from "./components/admin/AdminHome";
import AdminProfile from "./components/admin/profile/Profile";
import AdminUpdate from "./components/admin/profile/update/Update";
import AdminFirstTimePassword from "./components/admin/profile/update/firstTimePassword/FirstTimePassword";
import AdminPassword from "./components/admin/profile/update/password/Password";
import AddAdmin from "./components/admin/addAdmin/AddAdmin";
import DeleteAdmin from "./components/admin/deleteAdmin/DeleteAdmin";


import "./index.css";



const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/login/adminlogin" element={<AdminLogin />} />
      <Route path="/admin/home" element={<AdminHome />} />
      <Route path="/admin/profile" element={<AdminProfile />} />
      <Route path="/admin/update" element={<AdminUpdate />} />
      <Route path="/admin/update/password" element={<AdminPassword />} />
      <Route path="/admin/updatepassword" element={<AdminFirstTimePassword />}/>
      <Route path="/admin/addadmin" element={<AddAdmin />} />
      <Route path="/admin/deleteadmin" element={<DeleteAdmin />} />

    </Routes>
  );
};

export default App;
