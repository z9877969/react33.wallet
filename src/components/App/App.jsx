import { Route, Switch, Redirect } from "react-router-dom";
import MainPage from "../../pages/MainPage";
import TransactionPage from "../../pages/TransactionPage";
import BalancePage from "../../pages/BalancePage";
import "./App.css";

const App = () => {
  return (
    <Switch>
      <Route path={"/transaction/:transType"} component={TransactionPage} />
      <Route path="/balance" component={BalancePage} />
      <Route exact path={"/"} component={MainPage} />
      {/* <Route
        exact
        path={"/"}
        render={(routeProps) => (
          <MainPage
            {...routeProps}
          />
        )}
      /> */}
      <Redirect to="/" />
    </Switch>
  );
};

export default App;
