import CreateForm from "../utils/createForm";

const registerModel = {
  name: "Sign Up",
  operation: "registerJournalist",
  fields: [
    {
      name: "username",
      type: "text",
      label: "Username",
      placeholder: "Enter your username",
      required: true,
    },
    {
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "Enter your email",
      required: true,
    },
    {
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "Enter your password",
      required: true,
    },
  ],
};

const RegisterForm = () => {
  return CreateForm("Sign Up", registerModel);
};

export default RegisterForm;
