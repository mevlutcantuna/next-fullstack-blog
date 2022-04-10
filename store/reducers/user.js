import { GET_USER, RESET_USER } from "../constants/user";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER.LOADING:
      return { ...state, loading: action.payload };
    case GET_USER.SUCCESS:
      return { ...state, user: action.payload };
    case GET_USER.ERROR:
      return { ...state, user: null, error: action.payload };
    case RESET_USER:
      return { ...state, user: action.payload, error: null, loading: false };
    default:
      return state;
  }
};

export default userReducer;
