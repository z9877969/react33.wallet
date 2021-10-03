import MainInfo from "../components/MainInfo/MainInfo";
import {
  costsInfoOptions,
  incomesInfoOptions,
  balanceInfoOptions,
} from "../assets/mainInfoOptions.json";
import Section from "../components/_share/Section/Section";

const MainPage = ({ handleOpenActivePage }) => {
  return (
    <Section>
      <h1>Журнал расходов</h1>
      <MainInfo
        handleOpenActivePage={handleOpenActivePage}
        title="Расходы"
        activePage="costs"
        infoOptions={costsInfoOptions}
      />
      {/* {MainInfo({ title: "Расходы", infoOptions: costsInfoOptions })} */}
      <MainInfo
        handleOpenActivePage={handleOpenActivePage}
        title="Доходы"
        activePage="incomes"
        infoOptions={incomesInfoOptions}
      />
      <MainInfo
        handleOpenActivePage={handleOpenActivePage}
        title="Баланс"
        activePage="balance"
        infoOptions={balanceInfoOptions}
      />
    </Section>
  );
};

export default MainPage;
