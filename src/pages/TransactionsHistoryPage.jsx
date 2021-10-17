import { useSelector } from "react-redux";
import GoBackHeader from "../components/_share/GoBackHeader/GoBackHeader";

const TransactionsHistoryPage = ({ match }) => {
  const {
    params: { transType },
  } = match;
  const transactions = useSelector((state) => state.transactions);
  const data = transactions[transType];

  
  return (
    <>
      <GoBackHeader>
        <select name="period">
          <option value="day">День</option>
          <option value="month">Месяц</option>
        </select>
      </GoBackHeader>
      <table>
        <thead>
          <tr>
            <th>Всего:</th>
            <th>sum</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el) => (
            <tr>
              <td>{el.category}</td>
              <td>{el.sum}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TransactionsHistoryPage;
