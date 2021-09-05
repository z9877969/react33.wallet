import { Component } from "react";
import GoBackHeader from "../_share/GoBackHeader/GoBackHeader";
import TransactionForm from "../TransactionForm/TransactionForm";
import CategoriesListPage from "../_pages/CategoriesListPage";
import { costsCatList, incomesCatList } from "../../assets/categoriesList.json";

// ()
class TransactionPage extends Component {
  state = {
    date: "2021-09-05",
    time: "15:17",
    category: this.props.transType === "incomes" ? "Зарплата" : "Продукты",
    sum: "",
    currency: "UAH",
    comment: "",
    isCatList: false,
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSetCategory = (category) => {
    this.setState({ category });
    this.handleToggleCatList();
  };

//   handleCloseCatList = () => {
//     this.setState({ isCatList: false });
//   };

//   handleOpenCatList = () => {
//     this.setState({ isCatList: true });
//   };

  handleToggleCatList = () =>
    this.setState((prev) => ({
      isCatList: !prev.isCatList,
    }));

  render() {
    const { isCatList, ...dataForm } = this.state;
    const { transType, handleGoBack } = this.props;

    return (
      <>
        <GoBackHeader
          handleGoBack={!isCatList ? handleGoBack : this.handleCloseCatList}
          title={
            isCatList
              ? "Категории"
              : transType === "costs"
              ? "Расходы"
              : "Доходы"
          }
        />
        {!isCatList ? (
          <TransactionForm
            transType={transType}
            dataForm={dataForm}
            handleChange={this.handleChange}
            handleToggleCatList={this.handleToggleCatList}
          />
        ) : (
          <CategoriesListPage
            catsList={transType === "incomes" ? incomesCatList : costsCatList}
            handleSetCategory={this.handleSetCategory}
          />
        )}
      </>
    );
  }
}

export default TransactionPage;
