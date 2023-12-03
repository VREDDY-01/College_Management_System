import express from "express";
import {
  facultyLogin,
  updatedPassword,
  updateFaculty,
  createTest,
  getTest,
  getStudent,
  uploadMarks,
  markAttendance,
} from "../controller/facultyController.js";

const router = express.Router();

router.post("/login", facultyLogin);
router.post("/updatepassword", updatedPassword);
router.post("/updateprofile", updateFaculty);
router.post("/createtest", createTest);
router.post("/gettest", getTest);
router.post("/getstudent", getStudent);
router.post("/uploadmarks", uploadMarks);
router.post("/markattendance", markAttendance);

export default router;
