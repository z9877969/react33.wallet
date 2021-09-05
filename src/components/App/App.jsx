import { Component } from "react";
import MainPage from "../_pages/MainPage";
import TransactionPage from "../_pages/TransactionPage";
import BalancePage from "../_pages/BalancePage";
import "./App.css";

class App extends Component {
  state = {
    activePage: "",
  };

  handleOpenActivePage = (activePage) => {
    this.setState({ activePage });
  };

  returnToMainPage = () => {
    this.setState({ activePage: "" });
  };

  render() {
    const { activePage } = this.state;
    switch (activePage) {
      case "costs":
        return (
          <TransactionPage
            handleGoBack={this.returnToMainPage}
            transType={activePage}
          />
        );
      case "incomes":
        return (
          <TransactionPage
            handleGoBack={this.returnToMainPage}
            transType={activePage}
          />
        );
      case "balance":
        return <BalancePage />;
      default:
        return <MainPage handleOpenActivePage={this.handleOpenActivePage} />;
    }
  }
}

export default App;
