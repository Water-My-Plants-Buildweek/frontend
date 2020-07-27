import React, { useState } from 'react'

export default function AccountForm(props) {
    const initialFormValues = {
        phone: '',
        password: '',
        passwordConfirm: ''
    }

    const disabled = true
    // const onInputChange = evt => {
    //     const name = evt.target.name
    //     const value = evt.target.value
    //     inputChange(name, value)
    // }

    return (
        <div className='account-form-container'>
            <form>
                <label htmlFor='phoneInput'>
                    <input 
                    id = 'phoneInput'
                    name = 'phone'
                    type = 'tel'
                    placeholder='xxx-xxx-xxxx'
                    />
                </label>
                <label htmlFor='passwordInput'>
                    <input 
                    id = 'password'
                    name = 'password'
                    type = 'password'
                    placeholder='Enter New Password'
                    />
                </label>
                <label htmlFor='passwordConfirmInput'>
                    <input 
                    id = 'passwordConfirm'
                    name = 'passwordConfirm'
                    type = 'password'
                    placeholder='Confirm New Password'
                    />
                </label>

                <button className='submit-btn' disabled={disabled}>Submit</button>
            </form>
        </div>

    )

}

