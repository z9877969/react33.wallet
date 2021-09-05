import MainInfo from "../MainInfo/MainInfo";
import {
  costsInfoOptions,
  incomesInfoOptions,
  balanceInfoOptions,
} from "../../assets/mainInfoOptions.json";

const MainPage = ({ handleOpenActivePage }) => {
  return (
    <>
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
    </>
  );
};

export default MainPage;
