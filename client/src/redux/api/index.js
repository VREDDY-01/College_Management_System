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
export const getAllDepartment = () => API.get("/api/admin/getalldepartment");
export const updateAdmin = (updatedAdmin) =>API.post("/api/admin/updateprofile", updatedAdmin);
export const adminUpdatePassword = (updatedPassword) =>API.post("/api/admin/updatepassword", updatedPassword);
export const addAdmin = (admin) => API.post("/api/admin/addadmin", admin);
export const getAdmin = (admin) => API.post("/api/admin/getadmin", admin);
export const deleteAdmin = (data) => API.post("/api/admin/deleteadmin", data);

