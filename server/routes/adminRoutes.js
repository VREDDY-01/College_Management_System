import express from "express";
import auth from "../middleware/auth.js";
import {
  adminLogin,
  addAdmin,
  getAllAdmin,
  getAdmin,
  deleteAdmin,
  updateAdmin,
  updatedPassword,
  addDepartment,
  getAllDepartment,
  deleteDepartment,
  addFaculty,
  getFaculty,
  getAllFaculty,
  deleteFaculty,
  addSubject,
  getSubject,
  getAllSubject,
  deleteSubject,
  addStudent,
  getStudent,
  getAllStudent,
  deleteStudent,createNotice,
  getNotice
} from "../controller/adminController.js";
const router = express.Router();

router.post("/login", adminLogin);
router.get("/getalladmin",auth,getAllAdmin);
router.post("/addadmin", auth , addAdmin);
router.post("/getadmin", auth , getAdmin);
router.post("/deleteadmin", auth , deleteAdmin);
router.post("/updateprofile", auth , updateAdmin);
router.post("/updatepassword", auth , updatedPassword);
router.post("/adddepartment", auth , addDepartment);
router.get("/getalldepartment", auth , getAllDepartment);
router.post("/deletedepartment", auth , deleteDepartment);
router.post("/addfaculty", auth , addFaculty);
router.post("/getfaculty", auth , getFaculty);
router.get("/getallfaculty", auth , getAllFaculty);
router.post("/deletefaculty", auth , deleteFaculty);
router.post("/addsubject", auth , addSubject);
router.post("/getsubject", auth , getSubject);
router.get("/getallsubject", auth , getAllSubject);
router.post("/deletesubject", auth , deleteSubject);
router.post("/addstudent", auth , addStudent);
router.post("/getstudent", auth , getStudent);
router.get("/getallstudent", auth , getAllStudent);
router.post("/deletestudent", auth , deleteStudent);
router.post("/createnotice", auth, createNotice);
router.post("/getnotice", auth, getNotice);


export default router;
