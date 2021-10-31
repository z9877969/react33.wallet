const LabelInput = ({
  title,
  type = "text",
  name,
  value,
  placeholder = null,
  className,
  cbOnChange,
  cbOnClick,
}) => {
  return (
    <label>
      {title && <p>{title}</p>}
      <input
        className={className && className}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={cbOnChange}
        onClick={cbOnClick}
      />
    </label>
  );
};

export default LabelInput;
