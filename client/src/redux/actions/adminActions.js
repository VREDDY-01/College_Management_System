import { ADMIN_LOGIN, SET_ERRORS } from "../actionTypes";
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
