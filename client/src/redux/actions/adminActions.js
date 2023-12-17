import {
  ADMIN_LOGIN,
  SET_ERRORS,
  GET_ALL_DEPARTMENT,
  UPDATE_ADMIN,
  UPDATE_PASSWORD,
  ADD_ADMIN,
  GET_STUDENT,
  DELETE_ADMIN,
  ADD_DEPARTMENT,
  DELETE_DEPARTMENT,
  ADD_FACULTY,
  DELETE_FACULTY,
  GET_FACULTY,
  ADD_STUDENT,
  DELETE_STUDENT,
  ADD_SUBJECT,
  GET_SUBJECT,
  DELETE_SUBJECT,
  GET_ALL_ADMIN,
  GET_ALL_STUDENT,
  GET_ALL_FACULTY,
  CREATE_NOTICE,
  GET_NOTICE
} from "../actionTypes";
import * as api from "../api";

export const adminSignIn = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.adminSignIn(formData);
    dispatch({ type: ADMIN_LOGIN, data });
    navigate("/admin/home");
  } catch (error) {
    dispatch({ type: SET_ERRORS, payload: error.response.data });
  }
};

export const getAllStudent = () => async (dispatch) => {
  try {
    const { data } = await api.getAllStudent();
    dispatch({ type: GET_ALL_STUDENT, payload: data });
  } catch (error) {
    console.log("Redux Error", error);
  }
};

export const getAllFaculty = () => async (dispatch) => {
  try {
    const { data } = await api.getAllFaculty();
    dispatch({ type: GET_ALL_FACULTY, payload: data });
  } catch (error) {
    console.log("Redux Error", error);
  }
};

export const getAllAdmin = () => async (dispatch) => {
  try {
    const { data } = await api.getAllAdmin();
    dispatch({ type: GET_ALL_ADMIN, payload: data });
  } catch (error) {
    console.log("Redux Error", error);
  }
};

export const getAllDepartment = () => async (dispatch) => {
  try {
    const { data } = await api.getAllDepartment();
    dispatch({ type: GET_ALL_DEPARTMENT, payload: data });
  } catch (error) {
    console.log("Redux Error", error);
  }
};

export const updateAdmin = (formData, navigate) => async (dispatch) => {
  try {
    await api.updateAdmin(formData);
    dispatch({ type: UPDATE_ADMIN, payload: true });
    navigate("/admin/home");
  } catch (error) {
    dispatch({ type: SET_ERRORS, payload: error.response.data });
  }
};

export const adminUpdatePassword = (formData, navigate) => async (dispatch) => {
  try {
    await api.adminUpdatePassword(formData);
    dispatch({ type: UPDATE_PASSWORD, payload: true });
    alert("Password Updated");
    navigate("/admin/home");
  } catch (error) {
    dispatch({ type: SET_ERRORS, payload: error.response.data });
  }
};

export const addAdmin = (formData) => async (dispatch) => {
  try {
    await api.addAdmin(formData);
    alert("Admin Added Successfully");
    dispatch({ type: ADD_ADMIN, payload: true });
  } catch (error) {
    dispatch({ type: SET_ERRORS, payload: error.response.data });
  }
};

export const getAdmin = (formData) => async (dispatch) => {
  try {
    const { data } = await api.getAdmin(formData);
    dispatch({ type: GET_STUDENT, payload: data });
  } catch (error) {
    dispatch({ type: SET_ERRORS, payload: error.response.data });
  }
};

export const deleteAdmin = (formData) => async (dispatch) => {
  try {
    await api.deleteAdmin(formData);
    alert("Admin Deleted");
    dispatch({ type: DELETE_ADMIN, payload: true });
  } catch (error) {
    dispatch({ type: SET_ERRORS, payload: error.response.data });
  }
};

export const addDepartment = (formData) => async (dispatch) => {
  try {
    await api.addDepartment(formData);
    alert("Department Added Successfully");
    dispatch({ type: ADD_DEPARTMENT, payload: true });
  } catch (error) {
    dispatch({ type: SET_ERRORS, payload: error.response.data });
  }
};

export const deleteDepartment = (formData) => async (dispatch) => {
  try {
    await api.deleteDepartment(formData);
    alert("Department Deleted");
    dispatch({ type: DELETE_DEPARTMENT, payload: true });
  } catch (error) {
    dispatch({ type: SET_ERRORS, payload: error.response.data });
  }
};

export const addFaculty = (formData) => async (dispatch) => {
  try {
    await api.addFaculty(formData);
    alert("Faculty Added Successfully");
    dispatch({ type: ADD_FACULTY, payload: true });
  } catch (error) {
    dispatch({ type: SET_ERRORS, payload: error.response.data });
  }
};

export const deleteFaculty = (formData) => async (dispatch) => {
  try {
    await api.deleteFaculty(formData);
    alert("Faculty Deleted");
    dispatch({ type: DELETE_FACULTY, payload: true });
  } catch (error) {
    dispatch({ type: SET_ERRORS, payload: error.response.data });
  }
};

export const getFaculty = (department) => async (dispatch) => {
  try {
    const { data } = await api.getFaculty(department);
    dispatch({ type: GET_FACULTY, payload: data });
  } catch (error) {
    dispatch({ type: SET_ERRORS, payload: error.response.data });
  }
};

export const addStudent = (formData) => async (dispatch) => {
  try {
    await api.addStudent(formData);
    alert("Student Added Successfully");
    dispatch({ type: ADD_STUDENT, payload: true });
  } catch (error) {
    dispatch({ type: SET_ERRORS, payload: error.response.data });
  }
};

export const getStudent = (formData) => async (dispatch) => {
  try {
    const { data } = await api.getStudent(formData);
    dispatch({ type: GET_STUDENT, payload: data });
  } catch (error) {
    dispatch({ type: SET_ERRORS, payload: error.response.data });
  }
};

export const deleteStudent = (formData) => async (dispatch) => {
  try {
    await api.deleteStudent(formData);
    alert("Student Deleted");
    dispatch({ type: DELETE_STUDENT, payload: true });
  } catch (error) {
    dispatch({ type: SET_ERRORS, payload: error.response.data });
  }
};

export const addSubject = (formData) => async (dispatch) => {
  try {
    await api.addSubject(formData);
    alert("Subject Added Successfully");
    dispatch({ type: ADD_SUBJECT, payload: true });
  } catch (error) {
    dispatch({ type: SET_ERRORS, payload: error.response.data });
  }
};

export const getSubject = (formData) => async (dispatch) => {
  try {
    const { data } = await api.getSubject(formData);
    dispatch({ type: GET_SUBJECT, payload: data });
  } catch (error) {
    dispatch({ type: SET_ERRORS, payload: error.response.data });
  }
};

export const deleteSubject = (formData) => async (dispatch) => {
  try {
    await api.deleteSubject(formData);
    alert("Subject Deleted");
    dispatch({ type: DELETE_SUBJECT, payload: true });
  } catch (error) {
    dispatch({ type: SET_ERRORS, payload: error.response.data });
  }
};

export const createNotice = (formData) => async (dispatch) => {
  try {
    await api.createNotice(formData);
    alert("Notice Created Successfully");
    dispatch({ type: CREATE_NOTICE, payload: true });
  } catch (error) {
    dispatch({ type: SET_ERRORS, payload: error.response.data });
  }
};

export const getNotice = (formData) => async (dispatch) => {
  try {
    const { data } = await api.getNotice(formData);
    dispatch({ type: GET_NOTICE, payload: data });
  } catch (error) {
    dispatch({ type: SET_ERRORS, payload: error.response.data });
  }
};