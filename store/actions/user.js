import { getUser, updateUser } from "../../api/auth";
import {
  GET_USER_SUCCESS,
  GET_USER_LOADING,
  GET_USER_ERROR,
  RESET_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_LOADING,
  UPDATE_USER_ERROR,
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

export const _updateUser = (user_id, updatedUser) => async (dispatch) => {
  dispatch({ type: UPDATE_USER_LOADING, payload: true });
  try {
    const { data } = await updateUser(user_id, updatedUser);
    dispatch({ type: UPDATE_USER_SUCCESS, payload: data.user });
    return dispatch({ type: UPDATE_USER_LOADING, payload: false });
  } catch (error) {
    dispatch({ type: UPDATE_USER_LOADING, payload: false });
    return dispatch({ type: UPDATE_USER_ERROR, payload: error.message });
  }
};

export const _resetUser = () => {
  return {
    type: RESET_USER,
    payload: null,
  };
};
