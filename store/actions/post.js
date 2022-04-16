import { message } from "antd";
import { getPostsByFilter, deletePostByID } from "../../api/post";
import {
  GET_POST_LOADING,
  GET_POST_SUCCESS,
  GET_POST_ERROR,
  DELETE_POST_LOADING,
  DELETE_POST_ERROR,
  DELETE_POST_SUCCESS,
} from "../constants/post";

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

export const deletePost = (post_id) => async (dispatch) => {
  dispatch({ type: DELETE_POST_LOADING, payload: true });

  try {
    const { data } = await deletePostByID(post_id);
    dispatch({ type: DELETE_POST_SUCCESS, payload: data.post });
    dispatch({ type: DELETE_POST_LOADING, payload: false });
  } catch (error) {
    dispatch({ type: DELETE_POST_LOADING, payload: false });
    dispatch({ type: DELETE_POST_ERROR, payload: error.message });
    return message.error(error.message);
  }
};
