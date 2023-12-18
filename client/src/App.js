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
import FacultyLogin from "./components/login/facultyLogin/FacultyLogin";
import FacultyHome from "./components/faculty/FacultyHome";
import FacultyFirstTimePassword from "./components/faculty/profile/update/firstTimePassword/FirstTimePassword";
import FacultyProfile from "./components/faculty/profile/Profile";
import FacultyUpdate from "./components/faculty/profile/update/Update";
import FacultyPassword from "./components/faculty/profile/update/password/Password";
import CreateTest from "./components/faculty/createTest/CreateTest";
import MarkAttendance from "./components/faculty/markAttendance/MarkAttendance";
import UploadMarks from "./components/faculty/uploadMarks/UploadMarks";
import CreateNotice from "./components/admin/createNotice/CreateNotice";
import StudentLogin from "./components/login/studentLogin/StudentLogin";
import StudentFirstTimePassword from "./components/student/profile/update/firstTimePassword/FirstTimePassword";
import StudentHome from "./components/student/StudentHome";
import StudentProfile from "./components/student/profile/Profile";
import StudentUpdate from "./components/student/profile/update/Update";
import StudentPassword from "./components/student/profile/update/password/Password";
import SubjectList from "./components/student/subjectList/SubjectList";
import TestResult from "./components/student/testResult/TestResult";
import Attendance from "./components/student/attendance/Attendance";

import "./index.css";


const App = () => {
  return (
    <Routes>
    {/* ADMIN ROUTES */}
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
      <Route path="/admin/createnotice" element={<CreateNotice />} />

    {/* FACULTY ROUTES */}

      <Route path="/login/facultylogin" element={<FacultyLogin />} />
      <Route path="/faculty/home" element={<FacultyHome />} />
      <Route path="/faculty/password" element={<FacultyFirstTimePassword />} />
      <Route path="/faculty/profile" element={<FacultyProfile />} />
      <Route path="/faculty/update" element={<FacultyUpdate />} />
      <Route path="/faculty/update/password" element={<FacultyPassword />} />
      <Route path="/faculty/createtest" element={<CreateTest />} />
      <Route path="/faculty/uploadmarks" element={<UploadMarks />} />
      <Route path="/faculty/markattendance" element={<MarkAttendance />} />

    {/* STUDENT ROUTES */}
      <Route path="/login/studentlogin" element={<StudentLogin />} />
      <Route path="/student/home" element={<StudentHome />} />
      <Route path="/student/password" element={<StudentFirstTimePassword />} />
      <Route path="/student/profile" element={<StudentProfile />} />
      <Route path="/student/update" element={<StudentUpdate />} />
      <Route path="/student/update/password" element={<StudentPassword />} />
      <Route path="/student/subjectlist" element={<SubjectList />} />
      <Route path="/student/testresult" element={<TestResult />} />
      <Route path="/student/attendance" element={<Attendance />} />

    </Routes>
  );
};

export default App;
