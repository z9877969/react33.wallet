const MainInfo = (props) => {
  const { title, infoOptions, activePage, handleOpenActivePage } = props;
  return (
    <section>
      <h2>{title}</h2>
      <p>UAH</p>
      <button onClick={() => handleOpenActivePage(activePage)} type="button">
        Add
      </button>
      <ul>
        {infoOptions.map(({ title, sum, name }) => (
          <li key={name}>
            <span>{title}</span>
            <span>{sum}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MainInfo;
