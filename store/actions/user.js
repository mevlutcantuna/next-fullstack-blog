import { getUser } from "../../api/auth";
import {
  GET_USER_SUCCESS,
  GET_USER_LOADING,
  GET_USER_ERROR,
  RESET_USER,
} from "../constants/user";

export const _getUser = () => async (dispatch) => {
  dispatch({ type: GET_USER_LOADING, payload: true });
  const token = JSON.parse(localStorage.getItem("token"));

  try {
    const { data } = await getUser(token);
    dispatch({ type: GET_USER_SUCCESS, payload: data.user });
    return dispatch({ type: GET_USER_LOADING, payload: false });
  } catch (error) {
    dispatch({ type: GET_USER_LOADING, payload: false });
    return dispatch({ type: GET_USER_ERROR, payload: error.message });
  }
};

export const _resetUser = () => {
  return {
    type: RESET_USER,
    payload: null,
  };
};
