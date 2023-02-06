import axios from "axios";
import {
    USER_LOADED,
  USER_LOGIN_ERROR,
  USER_LOGIN_LOADING,
  USER_LOGIN_SUCCESS,
  USER_SIGNUP_ERROR,
  USER_SIGNUP_LOADING,
  USER_SIGNUP_SUCCESS,
} from "./user.actionTypes";
import { toast } from "react-toastify";
import { store } from "..";

export const SignupAPI = (signupCred) => async(dispatch) => {
  dispatch({ type: USER_SIGNUP_LOADING });
  try {
    const res = await axios.post("http://localhost:8080/user/signup", signupCred);
    console.log(res.data);
    localStorage.setItem("token", res.data);
    dispatch({ type: USER_SIGNUP_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: USER_SIGNUP_ERROR });
    console.log(error);
    toast.error(error.res?.data, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
};

export const loginAPI = (loginCreds) => async (dispatch) => {
  dispatch({ type: USER_LOGIN_LOADING });
  try {
    let res = await axios.post("http://localhost:8080/user/login", loginCreds);
    localStorage.setItem("token", res.data);
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({ type: USER_LOGIN_ERROR });
    console.log(error);
    toast.error(error.res?.data, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
};


export const loadUser = () => async (dispatch) => {
    const token = store.getState().users.token;
    if (token) {
      dispatch({
        type: USER_LOADED,
        payload: token,
      });
    } else {
      return null;
    }
  };