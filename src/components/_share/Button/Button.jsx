const Button = ({ type = "button", name = null, title, cbOnClick = null }) => {
  return (
    <button type={type} name={name} onClick={cbOnClick}>
      {title}
    </button>
  );
};

export default Button;
