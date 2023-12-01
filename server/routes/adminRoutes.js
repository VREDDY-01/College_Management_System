import express from "express";
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
  deleteStudent
} from "../controller/adminController.js";
const router = express.Router();

router.post("/login", adminLogin);
router.get("/getalladmin",getAllAdmin);
router.post("/addadmin", addAdmin);
router.post("/getadmin", getAdmin);
router.post("/deleteadmin", deleteAdmin);
router.post("/updateprofile", updateAdmin);
router.post("/updatepassword", updatedPassword);
router.post("/adddepartment", addDepartment);
router.get("/getalldepartment", getAllDepartment);
router.post("/deletedepartment", deleteDepartment);
router.post("/addfaculty", addFaculty);
router.post("/getfaculty", getFaculty);
router.get("/getallfaculty", getAllFaculty);
router.post("/deletefaculty", deleteFaculty);
router.post("/addsubject", addSubject);
router.post("/getsubject", getSubject);
router.get("/getallsubject", getAllSubject);
router.post("/deletesubject", deleteSubject);
router.post("/addstudent", addStudent);
router.post("/getstudent", getStudent);
router.get("/getallstudent", getAllStudent);
router.post("/deletestudent", deleteStudent);


export default router;
