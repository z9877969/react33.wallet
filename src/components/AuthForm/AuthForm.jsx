import { Link } from "react-router-dom";
import Form from "../_share/Form/Form";
import {
  registerForm,
  loginForm,
} from "../../assets/options/authFormOptions.json";
import s from "./AuthForm.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin, userRegister } from "../../redux/auth/authOperations";

const iS = {
  login: {
    email: "",
    password: "",
  },
  register: {
    name: "",
    email: "",
    password: "",
  },
};

const AuthForm = ({ authType }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(
    // authType === "register" ? iS.register : iS.login
    iS[authType]
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAuthSubmit = () => {
    console.log("form :>> ", form);
    const { name, ...dataForm } = form;
    authType === "register"
      ? dispatch(userRegister(dataForm))
      : dispatch(userLogin(dataForm));
  };

  return (
    <>
      <Form
        options={authType === "register" ? registerForm : loginForm}
        btnTitle={authType === "register" ? "Register" : "Login"}
        handleChange={handleChange}
        dataForm={form}
        cbOnSubmit={handleAuthSubmit}
        styles={s}
      />
      <Link to={authType === "register" ? "/auth/login" : "/auth/register"}>
        {authType === "register" ? "Login" : "Register"}
      </Link>
    </>
  );
};

export default AuthForm;
