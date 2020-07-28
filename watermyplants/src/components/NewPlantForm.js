import React, { useState, useEffect } from 'react'
import PlantCard from './PlantCard'

const initialPlantFormValues = {
    nickname: '',
    species: '',
    h20Frequecy: 1,
    imageURL: ''

}



export default function NewPlantForm(props) {

    const [plantFormValues, setPlantFormValues] = useState(initialPlantFormValues)

    const onSubmit = evt => {
        evt.preventDefault()
        setPlantFormValues(initialPlantFormValues)
        //add functionality to close page
    }

    const onChange = evt => {
        const name = evt.target.name
        const value = evt.target.value

        setPlantFormValues({
            ...plantFormValues,
            [name]: value
        })
    }

    return (
        <div className='account-form-container'>
            <h2>Add a new plant</h2>
            <form onSubmit={onSubmit} className='new-plant'>

                <label htmlFor='nickname'>
                    <input
                        placeholder="Nickname"
                        value={plantFormValues.name}
                        onChange={onChange}
                        name='nickname'
                    />
                </label>
                <label htmlFor='Species'>
                    <input
                        placeholder="Species"
                        value={plantFormValues.species}
                        onChange={onChange}
                        name='species'
                    />
                </label>
                <label htmlFor='watering frequency'>
                    Water every {' '}
                    <input
                        className='number-input'
                        type='number'
                        min='1'
                        value={plantFormValues.h20Frequecy}
                        onChange={onChange}
                        name='h20Frequecy'
                    />
                    {' '} day(s)
                </label>
                <label htmlFor='imageURL'>
                    <input
                        placeholder="Image URL"
                        value={plantFormValues.imageURL}
                        onChange={onChange}
                        name='imageURL'
                    />
                </label>
                <div className="add-cancel-buttons">
                    <button className='add-btn button'>Add</button>
                    <button className='cancel-btn button'>Cancel</button>
                </div>

            </form>
        </div>
    )

}