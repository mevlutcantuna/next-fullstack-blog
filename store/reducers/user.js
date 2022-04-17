import {
  GET_USER_SUCCESS,
  GET_USER_LOADING,
  GET_USER_ERROR,
  RESET_USER,
  UPDATE_USER_LOADING,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
} from "../constants/user";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_LOADING:
      return { ...state, loading: action.payload };
    case GET_USER_SUCCESS:
      return { ...state, user: action.payload };
    case GET_USER_ERROR:
      return { ...state, user: null, error: action.payload };
    case UPDATE_USER_LOADING:
      return { ...state, loading: action.payload };
    case UPDATE_USER_SUCCESS:
      return { ...state, user: { ...action.payload, ...state.post} };
    case UPDATE_USER_ERROR:
      return { ...state, error: action.payload };
    case RESET_USER:
      return { ...state, user: action.payload, error: null, loading: false };
    default:
      return state;
  }
};

export default userReducer;
