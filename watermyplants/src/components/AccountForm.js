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

                <button className='submit-btn' disabled={disabled}>Submit</button>
            </form>
        </div>

    )

}

