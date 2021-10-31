import {
  userRegisterApi,
  userLoginApi,
  refreshTokenApi,
} from "../../utils/services/firebaseApi";
import {
  refreshTokenRequest,
  refreshTokenSuccess,
  userLoginError,
  userLoginRequest,
  userLoginSuccess,
  userRegisterError,
  userRegisterRequest,
  userRegisterSuccess,
} from "./authActions";

export const userRegister = (userData) => (dispatch) => {
  dispatch(userRegisterRequest());

  userRegisterApi(userData)
    .then((userData) => dispatch(userRegisterSuccess(userData)))
    .catch((err) => dispatch(userRegisterError(err.message)));
};

export const userLogin = (userData) => (dispatch) => {
  dispatch(userLoginRequest());

  userLoginApi(userData)
    .then((userData) => dispatch(userLoginSuccess(userData)))
    .catch((err) => dispatch(userLoginError(err.message)));
};

export const refreshToken = (cb) => (dispatch, getState) => {
  dispatch(refreshTokenRequest());

  const { refreshToken } = getState().auth;

  refreshTokenApi(refreshToken)
    .then((tokens) => dispatch(refreshTokenSuccess(tokens)))
    .then(() => dispatch(cb()))
    .catch((err) => console.log("RUN LOGOUT"));
};
