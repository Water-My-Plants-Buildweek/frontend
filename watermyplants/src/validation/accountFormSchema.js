import * as yup from 'yup'

const accountFormSchema = yup.object().shape({
    phone: yup
      .string()
      .min(10, "Phone must be at least 10 characters")
      .required("Phone number is required"),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character"),
    passwordConfirm: yup
        .string()
        .required("Please confirm your password")
        .when("password", {
      is: password => (password && password.length > 0 ? true : false),
      then: yup.string().oneOf([yup.ref("password")], "Password doesn't match")
    })
        
  })

  export default accountFormSchema