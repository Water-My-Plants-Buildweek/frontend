import React, { useState, useEffect } from 'react'
import PlantCard from './PlantCard'
import NewPlantForm from './NewPlantForm'
import { connect } from 'react-redux';
import { getPlants } from '../actions/plantsActions'

function PlantsPage(props) {
    
    useEffect(() => {
        props.getPlants()
    },[])

    function onDelete(){
        ///add in delete logic
    }

    return (

        <div className='plant-card-container'>
            <a className='round-button add'></a>
            <NewPlantForm />
            {props.plants.map(plnt => {
                return (
                    
                    <PlantCard
                        key={plnt.id}
                        plant={plnt}
                    />
                )
            })
            }
            
        </div>
    )

}

const mapStateToProps = state => {
    return {
        plants: state.plantsReducer.plants
    }
}

export default connect(mapStateToProps, {getPlants})(PlantsPage);