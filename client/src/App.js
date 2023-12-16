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
import AddDepartment from "./components/admin/addDepartment/AddDepartment";
import DeleteDepartment from "./components/admin/deleteDepartment/DeleteDepartment";
import AddFaculty from "./components/admin/addFaculty/AddFaculty";
import DeleteFaculty from "./components/admin/deleteFaculty/DeleteFaculty";
import GetFaculty from "./components/admin/getFaculty/GetFaculty";
import AddStudent from "./components/admin/addStudent/AddStudent";
import GetStudent from "./components/admin/getStudent/GetStudent";
import DeleteStudent from "./components/admin/deleteStudent/DeleteStudent";
import AddSubject from "./components/admin/addSubject/AddSubject";
import GetSubject from "./components/admin/getSubject/GetSubject";
import DeleteSubject from "./components/admin/deleteSubject/DeleteSubject";


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
      <Route path="/admin/adddepartment" element={<AddDepartment />} />
      <Route path="/admin/deletedepartment" element={<DeleteDepartment />} />
      <Route path="/admin/addfaculty" element={<AddFaculty />} />
      <Route path="/admin/deletefaculty" element={<DeleteFaculty />} />
      <Route path="/admin/allfaculty" element={<GetFaculty />} />
      <Route path="/admin/addstudent" element={<AddStudent />} />
      <Route path="/admin/allstudent" element={<GetStudent />} />
      <Route path="/admin/deletestudent" element={<DeleteStudent />} />
      <Route path="/admin/addsubject" element={<AddSubject />} />
      <Route path="/admin/allsubject" element={<GetSubject />} />
      <Route path="/admin/deletesubject" element={<DeleteSubject />} />


    </Routes>
  );
};

export default App;
