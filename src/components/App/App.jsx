import { Route, Switch, Redirect } from "react-router-dom";
import MainPage from "../../pages/MainPage";
import TransactionPage from "../../pages/TransactionPage";
import BalancePage from "../../pages/BalancePage";
import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTransactions } from "../../redux/transactions/transactionsOperations";
import TransactionsHistoryPage from "../../pages/TransactionsHistoryPage";
import AuthPage from "../../pages/AuthPage";
import { useState } from "react";
import { getIsAuth } from "../../redux/auth/authSelectors";

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsAuth);
  useEffect(() => {
    isAuth && dispatch(getTransactions());
  }, [isAuth]);

  // const [isAuth] = useState(false);

  return !isAuth ? (
    <Switch>
      <Route path="/auth/:authType" component={AuthPage} />
      <Redirect to="/auth/login" />
    </Switch>
  ) : (
    <Switch>
      <Route path={"/transaction/:transType"} component={TransactionPage} />
      <Route path={"/history/:transType"} component={TransactionsHistoryPage} />
      <Route path="/balance" component={BalancePage} />
      <Route exact path={"/"} component={MainPage} />
      <Redirect to="/" />
    </Switch>
  );
};

export default App;
