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
    }, [])

    function addPlant() {
        setHideNewPlant(false)
    }

    return (
        <div className='plants-page'>
            <h1>My Plant Family</h1>
            <div className='plant-card-container'>
                {props.plants.map(plnt => {
                    return (

                        <PlantCard
                            key={plnt.id}
                            plant={plnt}
                            makingChanges={props.makingChanges}
                        />
                    )
                })
                }

                <a
                    className={hideNewPlant ? 'round-button add-button' : 'round-button add-button hidden'}
                    onClick={addPlant}
                ></a>
                <div className={hideNewPlant ? 'hidden' : ''}>
                    <NewPlantForm setHideNewPlant={setHideNewPlant} />

                </div>
            </div>
        </div>

    )

}

const mapStateToProps = state => {
    return {
        plants: state.plantsReducer.plants,
        makingChanges: state.plantsReducer.makingChanges
    }
}

export default connect(mapStateToProps, { getPlants })(PlantsPage);