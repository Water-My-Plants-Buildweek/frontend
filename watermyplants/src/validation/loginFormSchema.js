import * as yup from "yup";

export const loginFormSchema = yup.object().shape({
  username: yup.string().required("Username is a required field"),
  password: yup.string().required("Please enter your password"),
  // email: yup.string().required('Email is Required')
});
