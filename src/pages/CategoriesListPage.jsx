import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import GoBackHeader from "../components/_share/GoBackHeader/GoBackHeader";
import Button from "../components/_share/Button/Button";
import { addCategory } from "../redux/categories/categoriesOperations";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getCategories } from "../redux/categories/categoriesSelectors";
// import { useWrapper } from "../components/Provider/Provider";

const CategoriesListPage = ({ handleSetCategory }) => {
  const dispatch = useDispatch();
  // const location = useLocation();
  const { transType } = useParams();
  const [category, setCategory] = useState("");
  const categories = useSelector(getCategories);
  const catsList = categories[transType + "Cat"];

  const handleChange = (e) => {
    const { value } = e.target;
    setCategory(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCat = {
      // id: Date.now().toString(),
      title: category,
    };
    dispatch(addCategory({ transType, category: newCat }));

    setCategory("");
  };

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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Новая категория..."
          onChange={handleChange}
          value={category}
        />
        <Button type="submit" title="AddCat" />
      </form>
    </>
  );
};

export default CategoriesListPage;
