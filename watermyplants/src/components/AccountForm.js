import React, { useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import * as yup from 'yup'
import accountFormSchema from '../validation/accountFormSchema'
import 'react-phone-number-input/style.css'

//setting up default form values so that fields are empty
const initialFormValues = {
    phone: '',
    password: '',
    passwordConfirm: ''
}

//setting up default error values so that no errors appear
const initialFormErrors = {
    phone: '',
    password: '',
    passwordConfirm: ''
}

//initializes that submit button as disabled
const intitialDisabled = true

export default function AccountForm(props) {
    /////  STATE  /////
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(intitialDisabled)

    const onInputChange = evt => {
        const name = evt.target.name
        const value = evt.target.value
        inputChange(name, value)
    }

    //callback function
    const inputChange = (name, value) => {

        yup //validation
            .reach(accountFormSchema, name)
            .validate(value)
            .then(valid => {
                setFormErrors({
                    ...formErrors,
                    [name]: "",
                })
            })
            .catch(err => {
                setFormErrors({
                    ...formErrors,
                    [name]: err.errors[0],
                })
            })

        //state
        setFormValues({
            ...formValues,
            [name]: value
        })
    }


    return (
        <div className='account-form-container'>
            <form>
                <label htmlFor='phoneInput'>
                    <PhoneInput
                        placeholder="Enter phone number"
                        value={formValues.phone}
                        onChange={onInputChange}
                        name='phoneInput'
                    />
                </label>
                <label htmlFor='passwordInput'>
                    <input
                        id='password'
                        name='password'
                        type='password'
                        placeholder='Enter New Password'
                        value={formValues.password}
                        onChange={onInputChange}

                    />
                </label>
                <label htmlFor='passwordConfirmInput'>
                    <input
                        id='passwordConfirm'
                        name='passwordConfirm'
                        type='password'
                        placeholder='Confirm New Password'
                        value={formValues.passwordConfirm}
                        onChange={onInputChange}
                    />
                </label>

                <button className='submit-btn' disabled={disabled}>Submit</button>
            </form>
            <div className='errors'>
                <div>{formErrors.phone}</div>
                <div>{formErrors.password}</div>
                <div>{formErrors.passwordConfirm}</div>
            </div>
        </div>

    )

}

