import express from "express";
import {
  adminLogin,
  addAdmin,
  getAllAdmin,
  getAdmin,
  deleteAdmin
} from "../controller/adminController.js";
const router = express.Router();

router.post("/login", adminLogin);
router.get("/getalladmin",getAllAdmin);
router.post("/addadmin", addAdmin);
router.post("/getadmin", getAdmin);
router.post("/deleteadmin", deleteAdmin);


export default router;
