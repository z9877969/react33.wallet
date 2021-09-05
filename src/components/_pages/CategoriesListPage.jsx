import GoBackHeader from "../_share/GoBackHeader/GoBackHeader";
import Button from "../_share/Button/Button";

const CategoriesListPage = ({ handleSetCategory, catsList }) => {
  return (
    <>
      <ul>
        {catsList.map(({ title, id }) => {
          const cbOnClick = () => handleSetCategory(title);
          return (
            <li key={id}>
              <Button title={title} cbOnClick={cbOnClick} />
              <Button title={"..."} />
            </li>
          );
        })}
      </ul>
      <form onSubmit={() => {}}>
        <input
          type="text"
          placeholder="Новая категория..."
          onChange={() => {}}
          value=""
        />
        <Button type="submit" title="AddCat" />
      </form>
    </>
  );
};

export default CategoriesListPage;
