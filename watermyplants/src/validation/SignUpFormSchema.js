import * as yup from 'yup'



export const SignUpFormSchema = yup.object().shape({
    name: yup.string().required('Username is a required field'),
    password: yup.string().required('Please enter your password'),
    passwordConfirmation: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
});
    
    
