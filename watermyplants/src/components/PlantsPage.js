import React, { useState, useEffect } from 'react'
import PlantCard from './PlantCard'
import NewPlantForm from './NewPlantForm'
import { connect } from 'react-redux';
import { getPlants } from '../actions/plantsActions'
import EditPlantForm from './EditPlantForm'

function PlantsPage(props) {
    
    const [hideNewPlant, setHideNewPlant] = useState(true)

    useEffect(() => {
        props.getPlants()
    },[])

    function addPlant() {
        setHideNewPlant(false)
    }

    return (

        <div className='plant-card-container'>
            <a 
            className='round-button add'
            onClick={addPlant}
            ></a>
            <div className={hideNewPlant ? 'hidden' : ''}>
            <NewPlantForm/>
            <EditPlantForm/>
            </div>
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