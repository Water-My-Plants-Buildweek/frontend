import React, { useState, useEffect } from 'react'
import PlantCard from './PlantCard'
import NewPlantForm from './NewPlantForm'
import { connect } from 'react-redux';

function PlantsPage(props) {
    
    function onDelete(){
        ///add in delete logic
    }

    return (

        <div className='plant-card-container'>
            <a className='round-button add'></a>
            {props.plants.map(plnt => {
                return (
                    <PlantCard
                        key={plnt.id}
                        plants={plnt}
                    />
                )

            })
            }
            <NewPlantForm />
        </div>
    )

}

const mapStateToProps = state => {
    return {
        plants: state.plantsReducer.plants
    }
}

export default connect(mapStateToProps, {})(PlantsPage);