import { message } from "antd";
import { getPostsByFilter } from "../../api/blog";
import {
  GET_POST_LOADING,
  GET_POST_SUCCESS,
  GET_POST_ERROR,
} from "../constants/search";

export const getPosts = (search, tag) => async (dispatch) => {
  dispatch({ type: GET_POST_LOADING, payload: true });
  try {
    const { data } = await getPostsByFilter(search, tag);
    dispatch({ type: GET_POST_LOADING, payload: false });
    return dispatch({ type: GET_POST_SUCCESS, payload: data.posts });
  } catch (error) {
    dispatch({ type: GET_POST_LOADING, payload: false });
    dispatch({ type: GET_POST_ERROR, payload: error.message });
    return message.error(error.message);
  }
};
