import {
  ADMIN_LOGIN,
  LOGOUT,
  GET_ALL_DEPARTMENT,
  UPDATE_ADMIN,
  UPDATE_PASSWORD,
  ADD_ADMIN,
  DELETE_ADMIN,
  GET_STUDENT
} from "../actionTypes";

const initialState = {
  authData: null,
  updatedPassword: false,
  updatedAdmin: false,
  adminAdded: false,
  departmentAdded: false,
  facultyAdded: false,
  studentAdded: false,
  subjectAdded: false,
  allFaculty: [],
  allSubject: [],
  allStudent: [],
  allAdmin: [],
  allDepartment: [],
  students: [],
  faculties: [],
  subjects: [],
  admins: [],
  notices: [],
  adminDeleted: false,
  departmentDeleted: false,
  facultyDeleted: false,
  studentDeleted: false,
  subjectDeleted: false,
  noticeCreated: false,
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_LOGIN:
      localStorage.setItem("user", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };
    case UPDATE_PASSWORD:
      return {
        ...state,
        updatedPassword: action.payload,
      };
    case UPDATE_ADMIN:
      return {
        ...state,
        updatedAdmin: action.payload,
      };
    case ADD_ADMIN:
      return {
        ...state,
        adminAdded: action.payload,
      };

    case DELETE_ADMIN:
      return {
        ...state,
        adminDeleted: action.payload,
      };

    case GET_ALL_DEPARTMENT:
      return {
        ...state,
        allDepartment: action.payload,
      };

    case GET_STUDENT:
      return {
        ...state,
        students: action.payload,
      };

    default:
      return state;
  }
};

export default adminReducer;
