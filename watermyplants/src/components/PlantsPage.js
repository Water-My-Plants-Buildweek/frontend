import React, { useState, useEffect } from 'react'
import PlantCard from './PlantCard'
import NewPlantForm from './NewPlantForm'

export default function PlantsPage (props) {
    
    return (
        
        <div>
            <PlantCard/>
            <NewPlantForm/>
        </div>
    )
    
}