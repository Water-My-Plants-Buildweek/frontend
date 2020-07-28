import React, { useState, useEffect } from 'react'
import PlantCard from './PlantCard'
import NewPlantForm from './NewPlantForm'
import { connect } from 'react-redux';

function PlantsPage (props) {
    
    return (
        
        <div>
            <PlantCard/>
            <NewPlantForm/>
        </div>
    )
    
}

const mapStateToProps = state => {
    return {
        plants: state.plantsReducer.plants
    }
}

export default connect(mapStateToProps, {})(PlantsPage);