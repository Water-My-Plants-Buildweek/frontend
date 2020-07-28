import React, { useState, useEffect } from 'react'
import * as yup from 'yup'
import passwordFormSchema from '../validation/passwordFormSchema'
import phoneFormSchema from '../validation/phoneFormSchema'

//setting up default form values so that fields are empty

const initialPhoneValue = {
    phone: ""}

const initialPasswordValues = {
    password: '',
    passwordConfirm: ''
}

//setting up default error values so that no errors appear

const initialPhoneError = {
    phone: ""}

const initialPasswordErrors = {
    password: '',
    passwordConfirm: ''
}


//initializes that submit button as disabled
const intitialDisabledPhone = true
const intitialDisabledPassword = true

export default function AccountForm(props) {
    /////  STATE  /////
    const [passwordValues, setPasswordValues] = useState(initialPasswordValues)
    const [passwordErrors, setPasswordErrors] = useState(initialPasswordErrors)
    const [phone, setPhone] = useState(initialPhoneValue)
    const [phoneError, setPhoneError] = useState(initialPhoneError)
    const [disabledPhone, setDisabledPhone] = useState(intitialDisabledPhone)
    const [disabledPassword, setDisabledPassword] = useState(intitialDisabledPassword)


    const onPhoneSubmit = evt => {
        evt.preventDefault()
        setPhone(initialPhoneValue)
      }

      const onPasswordSubmit = evt => {
        evt.preventDefault()
        setPasswordValues(initialPasswordValues)
      }

    const onPhoneChange = evt => {
        const name = evt.target.name
        const value = evt.target.value
        
        yup //phone validation
        .reach(phoneFormSchema, name)
        .validate(value)
        .then(valid => {
            setPhoneError({
                ...phoneError,
                [name]: "",
            })
        })
        .catch(err => {
            setPhoneError({
                ...phoneError,
                [name]: err.errors[0],
            })
        })

    //state
    setPhone({...phone,
        [name]: value
    })
    }

    const onPasswordChange = evt => {
        const name = evt.target.name
        const value = evt.target.value
        
        yup //passwor validation
        .reach(passwordFormSchema, name)
        .validate(value)
        .then(valid => {
            setPasswordErrors({
                ...passwordErrors,
                [name]: "",
            })
        })
        .catch(err => {
            setPasswordErrors({
                ...passwordErrors,
                [name]: err.errors[0],
            })

        })
    setPasswordValues({
        ...passwordValues,
        [name]: value
    })
    }

    //enables submit button once validation is met
    useEffect(() => {
       phoneFormSchema.isValid(phone).then(valid => {
          setDisabledPhone(!valid)
        })
      }, [phone])

    useEffect(() => {
        passwordFormSchema.isValid(passwordValues).then(valid => {
          setDisabledPassword(!valid)
        })
      }, [passwordValues])

    return (
        
        <div className='account-form-container'>
            <h2>Edit Account Information</h2>
            <form onSubmit={onPhoneSubmit} className = 'change-email'>
                <label htmlFor='phone'>
                    <input
                        placeholder="Enter phone number"
                        value={phone.phone}
                        onChange={onPhoneChange}
                        name='phone'
                    />
                </label>
                <button className='submit-btn button' disabled={disabledPhone}>Update</button>
            </form>
            <form onSubmit={onPasswordSubmit} className='change-password'>
                <label htmlFor='password'>
                    <input
                        id='password'
                        name='password'
                        type='password'
                        placeholder='Enter New Password'
                        value={passwordValues.password}
                        onChange={onPasswordChange}

                    />
                </label>
                <label htmlFor='passwordConfirm'>
                    <input
                        id='passwordConfirm'
                        name='passwordConfirm'
                        type='password'
                        placeholder='Confirm New Password'
                        value={passwordValues.passwordConfirm}
                        onChange={onPasswordChange}
                    />
                </label>

                <button className='submit-btn button' disabled={disabledPassword}>Update</button>
            </form>
            <div className='errors'>
                <div>{phoneError.phone}</div>
                <div>{passwordErrors.password}</div>
                <div>{passwordErrors.passwordConfirm}</div>
            </div>
        </div>

    )

}

