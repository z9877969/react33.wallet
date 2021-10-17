import { Route, Switch, Redirect } from "react-router-dom";
import MainPage from "../../pages/MainPage";
import TransactionPage from "../../pages/TransactionPage";
import BalancePage from "../../pages/BalancePage";
import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTransactions } from "../../redux/transactions/transactionsOperations";
import TransactionsHistoryPage from "../../pages/TransactionsHistoryPage";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTransactions());
  }, []);

  return (
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
