const LabelInput = ({
  title,
  type = "text",
  name,
  value,
  placeholder = null,
  cbOnChange,
  cbOnClick,
}) => {
  return (
    <label>
      {title && <p>{title}</p>}
      {cbOnChange ? (
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={cbOnChange}
        />
      ) : (
        <input type={type} name={name} value={value} onClick={cbOnClick} />
      )}
    </label>
  );
};

export default LabelInput;
