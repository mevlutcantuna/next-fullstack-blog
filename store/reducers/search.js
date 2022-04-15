import {
  GET_POSTS,
  GET_POST_ERROR,
  GET_POST_LOADING,
  GET_POST_SUCCESS,
} from "../constants/search";

const initialState = {
  posts: null,
  loading: false,
  error: "",
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST_SUCCESS:
      return { ...state, posts: action.payload };
    case GET_POST_LOADING:
      return { ...state, loading: action.payload };
    case GET_POST_ERROR:
      return { ...state, error: action.payload };
    default:
      return { ...state };
  }
};

export default searchReducer;
