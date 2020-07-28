import * as yup from "yup";

export const SignUpFormSchema = yup.object().shape({
  name: yup.string().required("Username is a required field"),
  password: yup.string().required("Please enter your password"),
  // .matches(
  //     /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
  //     "Password must contain at least 8 characters, one uppercase, one number and one special case character"),

  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
