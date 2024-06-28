import {
  loginFailed,
  loginSuccess,
} from "../../../redux/features/user/userSlice";
import CreateForm from "../utils/createForm";

const loginModel = {
  name: "Sign In",
  operation: "loginJournalist",
  dispatch: {
    success: loginSuccess,
    error: loginFailed,
  },

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

const LoginForm = ({ children }) => {
  return CreateForm("Sign In", loginModel, children);
};

export default LoginForm;
