import * as yup from 'yup'

const accountFormSchema = yup.object().shape({
    phone: yup
      .string()
      .min(10, "Phone must be at least 10 characters")
      .required("Phone number is required"),
    password: yup
      .string()
      .required("Password is required"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
  })

  export default accountFormSchema