import * as yup from 'yup'



export const loginFormSchema = yup.object().shape({
    name: yup.string().required('Name is a required field'),
    password: yup.string().required('Please enter your password'),
    // email: yup.string().required('Email is Required')
    
})