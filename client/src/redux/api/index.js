import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("user")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("user")).token
    }`;
  }
  return req;
});

// Admin

export const adminSignIn = (formData) => API.post("/api/admin/login", formData);
export const getAllStudent = () => API.get("/api/admin/getallstudent");
export const getAllFaculty = () => API.get("/api/admin/getallfaculty");
export const getAllAdmin = () => API.get("/api/admin/getalladmin");
export const getAllDepartment = () => API.get("/api/admin/getalldepartment");
export const updateAdmin = (updatedAdmin) =>API.post("/api/admin/updateprofile", updatedAdmin);
export const adminUpdatePassword = (updatedPassword) =>API.post("/api/admin/updatepassword", updatedPassword);
export const addAdmin = (admin) => API.post("/api/admin/addadmin", admin);
export const getAdmin = (admin) => API.post("/api/admin/getadmin", admin);
export const deleteAdmin = (data) => API.post("/api/admin/deleteadmin", data);
export const addDepartment = (department) => API.post("/api/admin/adddepartment", department);
export const deleteDepartment = (data) => API.post("/api/admin/deletedepartment", data);
export const addFaculty = (faculty) => API.post("/api/admin/addfaculty", faculty);
export const deleteFaculty = (data) => API.post("/api/admin/deletefaculty", data);
export const getFaculty = (department) => API.post("/api/admin/getfaculty", department);
export const addStudent = (student) => API.post("/api/admin/addstudent", student);
export const getStudent = (student) => API.post("/api/admin/getstudent", student);
export const deleteStudent = (data) => API.post("/api/admin/deletestudent", data);
export const addSubject = (subject) => API.post("/api/admin/addsubject", subject);
export const getSubject = (subject) => API.post("/api/admin/getsubject", subject);
export const deleteSubject = (data) => API.post("/api/admin/deletesubject", data);
