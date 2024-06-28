import CreateForm from "../utils/createForm";

const registerModel = {
  name: "Sign Up",
  operation: "registerJournalist",
  fields: [
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
