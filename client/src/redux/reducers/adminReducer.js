import {
  ADMIN_LOGIN,
} from "../actionTypes";

const initialState = {
  authData: null,
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_LOGIN:
      localStorage.setItem("user", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };
    default:
      return state;
  }
};

export default adminReducer;
