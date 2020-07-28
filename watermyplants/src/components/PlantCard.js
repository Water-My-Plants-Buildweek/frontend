import React, { useState, useEffect } from 'react'

export default function PlantsPage(props) {

    const {plants} = props

    return (

        <div className='plant-card'>
            <h2>{plants.nickname}</h2>
            <img src={plants.imageURL} alt="plant image" />
            <h3>Species</h3>
            <p>{plants.species}</p>
            <h3>Water</h3>
            <p>every{` ${plants.h2oFrequency} `}days</p>
            <div className='edit-delete-buttons'>
            <a className='round-button edit'></a>
            <a className='round-button delete'></a>
            </div>
            

        </div>
    )

}