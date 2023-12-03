import express from "express";
import {
  studentLogin,
  updatedPassword,
  updateStudent,
  testResult,
  attendance,
} from "../controller/studentController.js";

const router = express.Router();

router.post("/login", studentLogin);
router.post("/updatepassword",updatedPassword);
router.post("/updateprofile",updateStudent);
router.post("/testresult",testResult);
router.post("/attendance",attendance);

export default router;
