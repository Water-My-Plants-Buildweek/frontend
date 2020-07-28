import React, { useState, useEffect } from 'react'

export default function PlantsPage(props) {

    // const plants = {
    //     name: 'Bob',
    //     species: 'snake plant',
    //     h2oFrequency: 2,
    //     imageURL: 'https://images.unsplash.com/photo-1547516508-e910d368d995?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
    // }

    const {plants} = props

    return (

        <div className='plant-card'>
            <h2>{plants.name}</h2>
            <img src={plants.imageURL} alt="plant image" />
            <h3>Species</h3>
            <p>{plants.species}</p>
            <h3>Water</h3>
            <p>every{''}{plants.h2oFrequency}{''}days</p>

        </div>
    )

}