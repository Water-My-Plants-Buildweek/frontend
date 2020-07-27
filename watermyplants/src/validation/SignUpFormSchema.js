import * as yup from 'yup'



export const SignUpFormSchema = yup.object().shape({
    name: yup.string().required('Name is a required field'),
    password: yup.string().required('Please enter your password'),
    
    
})