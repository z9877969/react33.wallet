import AuthForm from "../components/AuthForm/AuthForm";

const AuthPage = ({ match }) => {
  const { authType } = match.params;
  return <AuthForm authType={authType} />;
//   return null;
};

export default AuthPage;
