import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import transactions from "./transactions/transactionsReducer";
import categories from "./categories/categoriesReducer";
import { error } from "./error/errorReducer";
import auth from "./auth/authReducer";

const authPersistConfig = {
  key: "tokens",
  version: 1,
  storage,
  // whitelist: ["idToken", "refreshToken", "localId"],
  blacklist: ["email"],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, auth),
    transactions,
    categories,
    error,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
