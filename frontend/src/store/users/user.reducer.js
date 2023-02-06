import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";
const {
  USER_SIGNUP_LOADING,
  USER_LOGIN_LOADING,
  USER_SIGNUP_ERROR,
  USER_LOGIN_ERROR,
  USER_SIGNUP_SUCCESS,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_LOADED,
} = require("./user.actionTypes");

const initState = {
  loading: false,
  error: false,
  token: localStorage.getItem("token") || null,
  name: null,
  email: null,
  _id: null,
  role: null,
};

export const userReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case USER_SIGNUP_LOADING || USER_LOGIN_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case USER_SIGNUP_ERROR || USER_LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case USER_LOADED:
    case USER_SIGNUP_SUCCESS:
    case USER_LOGIN_SUCCESS:
      toast("Welcome...", { position: toast.POSITION.BOTTOM_RIGHT });
      const user = jwtDecode(payload);
      console.log(user);
      return {
        ...state,
        loading: false,
        error: false,
        token: payload,
        name: user.name,
        _id: user._id,
        email: user.email,
        role: user.role,
      };
    case USER_LOGOUT:
      localStorage.removeItem("token");
      toast("Good Bye...", { position: toast.POSITION.BOTTOM_RIGHT });
      return {
        ...state,
        token: null,
        error: false,
        loading: false,
        name: null,
        _id: null,
        email: null,
        role: null,
      };
    default:
      return state;
  }
};
