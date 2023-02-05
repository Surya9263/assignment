const {
  USER_SIGNUP_LOADING,
  USER_LOGIN_LOADING,
  USER_SIGNUP_ERROR,
  USER_LOGIN_ERROR,
  USER_SIGNUP_SUCCESS,
  USER_LOGIN_SUCCESS,
} = require("./user.actionTypes");

const initState = {
  loading: false,
  error: false,
  token: "",
};

const userReducer = (state = initState, { type, payload }) => {
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
    case USER_SIGNUP_SUCCESS || USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        token: payload,
      };
    default:
      return state;
  }
};
