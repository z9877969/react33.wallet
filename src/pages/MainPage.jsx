import MainInfo from "../components/MainInfo/MainInfo";
import {
  costsInfoOptions,
  incomesInfoOptions,
  balanceInfoOptions,
} from "../assets/mainInfoOptions.json";
import Section from "../components/_share/Section/Section";

const MainPage = ({ history, location }) => {
  const { push } = history;

  const openTransactionPage = (transType) => {
    const transactionLocation = {
      pathname: "/transaction/" + transType,
      state: { from: location },
    };
    push(transactionLocation);
  };
  const openBalancePage = () => push("/balance");

  return (
    <Section>
      <h1>Журнал расходов</h1>
      <MainInfo
        handleOpenActivePage={openTransactionPage}
        title="Расходы"
        activePage="costs"
        infoOptions={costsInfoOptions}
      />
      {/* {MainInfo({ title: "Расходы", infoOptions: costsInfoOptions })} */}
      <MainInfo
        handleOpenActivePage={openTransactionPage}
        title="Доходы"
        activePage="incomes"
        infoOptions={incomesInfoOptions}
      />
      <MainInfo
        handleOpenActivePage={openBalancePage}
        title="Баланс"
        activePage="balance"
        infoOptions={balanceInfoOptions}
      />
    </Section>
  );
};

export default MainPage;
