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
  deleteFaculty
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


export default router;
