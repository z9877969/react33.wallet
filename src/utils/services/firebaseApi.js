import axios from "axios";

// 'https://[PROJECT_ID].firebaseio.com/message_list.json'

const API_KEY = "AIzaSyDhCqTzbBELyZv51ddJClCFffK8v4sSz7M";

const url = {
  DB: "https://react-33-default-rtdb.firebaseio.com/",
  AUTH: "https://identitytoolkit.googleapis.com/v1/",
  REFRESH: "https://securetoken.googleapis.com/v1/",
};

const endPoint = {
  REGISTER: "accounts:signUp",
  LOGIN: "accounts:signInWithPassword",
  REFRESH: "token",
};
const setBaseUrl = (url) => (axios.defaults.baseURL = url);
const setParams = (params) => (axios.defaults.params = params);

// axios.defaults.baseURL = "https://react-33-default-rtdb.firebaseio.com/";

// "/ada/name.json?auth=<ID_TOKEN>"

export const addTransactionApi = ({
  transType,
  transaction,
  localId,
  idToken,
}) => {
  setBaseUrl(url.DB);
  setParams({
    auth: idToken,
  });
  return axios.post(
    `/users/${localId}/transactions/${transType}.json`,
    transaction
  );
};

const normalizeData = (data) =>
  Object.entries(data).map(([id, data]) => ({ id, ...data }));

export const getTransactionsApi = ({ localId, idToken }) => {
  setBaseUrl(url.DB);
  setParams({
    auth: idToken,
  });
  return axios
    .get(`/users/${localId}/transactions.json`)
    .then(({ data }) => {
      data.costs = data.costs ? normalizeData(data.costs) : [];
      data.incomes = data.incomes ? normalizeData(data.incomes) : [];
      return data;
    })
    .catch((err) => {
      throw err;
    });
};

export const addCategoryApi = ({ transType, category }) => {
  setBaseUrl(url.DB);
  return axios.post(`/categories/${transType}.json`, category).catch((err) => {
    throw err;
  });
};

export const getCategoriesApi = (transType) => {
  setBaseUrl(url.DB);
  return axios
    .get(`/categories/${transType}.json`)
    .then(({ data }) => data)
    .catch((err) => {
      throw err;
    });
};

// https://identitytoolkit.googleapis.com/v1/?key=[API_KEY]
// https://identitytoolkit.googleapis.com/v1/?key=[API_KEY]

// {"email":"[user@example.com]","password":"[PASSWORD]","returnSecureToken":true}'

export const userRegisterApi = (userData) => {
  setBaseUrl(url.AUTH);
  setParams({
    key: API_KEY,
  });
  return axios
    .post(endPoint.REGISTER, {
      ...userData,
      returnSecureToken: true,
    })
    .then(({ data: { idToken, localId, email, refreshToken } }) => ({
      idToken,
      localId,
      email,
      refreshToken,
    }));
};

export const userLoginApi = (userData) => {
  setBaseUrl(url.AUTH);
  setParams({
    key: API_KEY,
  });
  return axios
    .post(endPoint.LOGIN, {
      ...userData,
      returnSecureToken: true,
    })
    .then(({ data: { idToken, localId, email, refreshToken } }) => ({
      idToken,
      localId,
      email,
      refreshToken,
    }));
};

export const refreshTokenApi = (refreshToken) => {
  setBaseUrl(url.REFRESH);
  setParams({
    key: API_KEY,
  });
  return axios
    .post(endPoint.REFRESH, {
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    })
    .then(({ data: { refresh_token: refreshToken, id_token: idToken } }) => ({
      refreshToken,
      idToken,
    }));
};
