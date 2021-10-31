import Button from "../Button/Button";
import LabelInput from "../LabelInput/LabelInput";

const Form = ({
  options,
  btnTitle = "OK",
  dataForm,
  handleChange,
  handleClick,
  cbOnSubmit,
  styles: s,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    cbOnSubmit();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <Button title={btnTitle} type="submit" className={s.btnOk} />
      {options.map(({ title, type, name, placeholder }) => (
        <LabelInput
          className={s.label}
          title={title}
          type={type}
          name={name}
          value={dataForm[name]}
          placeholder={placeholder}
          cbOnChange={type !== "button" ? handleChange : null}
          cbOnClick={type === "button" ? handleClick : null}
        />
      ))}
    </form>
  );
};

export default Form;
