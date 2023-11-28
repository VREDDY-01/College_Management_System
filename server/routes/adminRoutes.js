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
  deleteDepartment
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


export default router;
