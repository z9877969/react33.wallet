import { useEffect, useState } from "react";
import {
  useHistory,
  Route,
  Switch,
  useRouteMatch,
  Redirect,
} from "react-router-dom";
import { generate } from "shortid";
import GoBackHeader from "../components/_share/GoBackHeader/GoBackHeader";
import TransactionForm from "../components/TransactionForm/TransactionForm";
import CategoriesListPage from "./CategoriesListPage";
import Section from "../components/_share/Section/Section";
import { useWrapper } from "../components/Provider/Provider";

const TransactionPage = ({ catsList }) => {
  const { push, location } = useHistory();
  const match = useRouteMatch();
  const {
    params: { transType },
  } = match;

  const [dataForm, setDataForm] = useState({
    date: "2021-09-05",
    time: "15:17",
    category: transType === "incomes" ? "Зарплата" : "Продукты",
    sum: "",
    currency: "UAH",
    comment: "",
  });

  const { addTransaction, setTransType } = useWrapper();

  const handleGoBack = () => push(location.state?.from || "/");
  const openCatListPage = () =>
    push({
      pathname: match.url + "/cat-list",
      state: {
        from: location,
      },
    });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSetCategory = (category) => {
    setDataForm((prev) => ({ ...prev, category }));
    handleGoBack();
  };

  const handleSubmit = () => {
    addTransaction({ ...dataForm, id: generate() });
    handleGoBack();
  };

  useEffect(() => {
    setTransType(transType);
  }, []);

  return (
    <Section>
      <GoBackHeader
        handleGoBack={handleGoBack}
        title={
          !match.isExact
            ? "Категории"
            : transType === "costs"
            ? "Расходы"
            : "Доходы"
        }
      />
      <Switch>
        <Route path={match.path + "/cat-list"}>
          <CategoriesListPage
            handleSetCategory={handleSetCategory}
          />
        </Route>
        <Route exact path={match.path}>
          <TransactionForm
            transType={transType}
            dataForm={dataForm}
            handleChange={handleChange}
            openCatListPage={openCatListPage}
            cbOnSubmit={handleSubmit}
          />
        </Route>
        <Redirect to={match.url} />
      </Switch>
    </Section>
  );
};

export default TransactionPage;
