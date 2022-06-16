import { Form } from "./Form";

const Login = ({ closeModal }) => {
  const handleLogin = (email, pass) => {
    closeModal();
  };

  return <Form handleClick={handleLogin} title="Login" />;
};

export { Login };
