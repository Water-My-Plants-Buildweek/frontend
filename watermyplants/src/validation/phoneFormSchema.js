import * as yup from 'yup'




const phoneFormSchema = yup.object().shape({
    phone: yup
      .string()
      .min(10, "Phone must be at least 10 characters")
      .required("Phone number is required"),

  })

  export default phoneFormSchema