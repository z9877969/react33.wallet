import axios from "axios";

// 'https://[PROJECT_ID].firebaseio.com/message_list.json'

axios.defaults.baseURL =
  "https://react-33-default-rtdb.firebaseio.com/";

export const addTransactionApi = ({ transType, transaction }) => {
  return axios.post(`/transactions/${transType}.json`, transaction);
};

const normalizeData = (data) =>
  Object.entries(data).map(([id, data]) => ({ id, ...data }));

export const getTransactionsApi = () => {
  return axios
    .get("/transactions.json")
    .then(({ data }) => {
      data.costs = normalizeData(data.costs);
      data.incomes = normalizeData(data.incomes);
      return data;
    })
    .catch((err) => {
      throw err;
    });
};

export const addCategoryApi = ({ transType, category }) => {
  return axios.post(`/categories/${transType}.json`, category).catch((err) => {
    throw err;
  });
};

export const getCategoriesApi = (transType) => {
  return axios
    .get(`/categories/${transType}.json`)
    .then(({ data }) => data)
    .catch((err) => {
      throw err;
    });
};
