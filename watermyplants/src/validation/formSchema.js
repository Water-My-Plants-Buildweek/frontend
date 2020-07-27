export const formSchema = yup.object().shape({
    name: yup.string().required('Name is a required field'),
    password: yup.string().required('Password is a required field')
    
})