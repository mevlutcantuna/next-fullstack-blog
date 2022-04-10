import { getUser } from "../../api/auth";
import { GET_USER, RESET_USER } from "../constants/user";

export const _getUser = () => async (dispatch) => {
  dispatch({ type: GET_USER.LOADING, payload: true });
  const token = JSON.parse(localStorage.getItem("token"));

  try {
    const { data } = await getUser(token);
    dispatch({ type: GET_USER.SUCCESS, payload: data.user });
    dispatch({ type: GET_USER.LOADING, payload: false });
  } catch (error) {
    dispatch({ type: GET_USER.LOADING, payload: false });
    dispatch({ type: GET_USER.ERROR, payload: error.message });
  }
};

export const _resetUser = () => {
  return {
    type:RESET_USER,
    payload:null
  }
}