import { Form } from "./Form";

const SignUp = ({ closeModal }) => {
  const handleRegister = (email, pass) => {
    closeModal();
  };

  return <Form handleClick={handleRegister} title="Register" />;
};

export { SignUp };
