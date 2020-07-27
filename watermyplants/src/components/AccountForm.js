import React, { useState, useEffect } from 'react'
import * as yup from 'yup'
import accountFormSchema from '../validation/accountFormSchema'

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

    //enables submit button once validation is met
    useEffect(() => {
        accountFormSchema.isValid(formValues).then(valid => {
          setDisabled(!valid)
        })
      }, [formValues])

    return (
        <div className='account-form-container'>
            <form>
                <label htmlFor='phone'>
                    <input
                        placeholder="Enter phone number"
                        value={formValues.phone}
                        onChange={onInputChange}
                        name='phone'
                    />
                </label>
                <label htmlFor='password'>
                    <input
                        id='password'
                        name='password'
                        type='password'
                        placeholder='Enter New Password'
                        value={formValues.password}
                        onChange={onInputChange}

                    />
                </label>
                <label htmlFor='passwordConfirm'>
                    <input
                        id='passwordConfirm'
                        name='passwordConfirm'
                        type='password'
                        placeholder='Confirm New Password'
                        value={formValues.passwordConfirm}
                        onChange={onInputChange}
                    />
                </label>

                <button className='submit-btn' disabled={disabled}>Update</button>
            </form>
            <div className='errors'>
                <div>{formErrors.phone}</div>
                <div>{formErrors.password}</div>
                <div>{formErrors.passwordConfirm}</div>
            </div>
        </div>

    )

}

