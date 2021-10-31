import { createReducer } from "@reduxjs/toolkit";
import {
  userLoginSuccess,
  userRegisterSuccess,
  refreshTokenSuccess,
} from "./authActions";

const iS = { idToken: null, localId: null, email: null, refreshToken: null };

const authReducer = createReducer(iS, {
  [userRegisterSuccess]: (_, { payload }) => payload,
  [userLoginSuccess]: (_, { payload }) => payload,
  [refreshTokenSuccess]: (state, { payload }) => ({ ...state, ...payload }),
});

export default authReducer;
