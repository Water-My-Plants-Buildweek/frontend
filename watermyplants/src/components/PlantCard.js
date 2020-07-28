import React, { useState, useEffect } from 'react'

export default function PlantsPage (props) {
    
    const plants = {
        name:'Bob',
        species:'snake plant',
        h20Frequency: 2,
        imageURL: 
    }

    // const {plants} = props

    return (
        
        <div className='plant-card'>
           <h2>{plants.name}</h2>
           <img/>
           <h3>Species</h3>
           <h3>Water</h3>

        </div>
    )
    
}