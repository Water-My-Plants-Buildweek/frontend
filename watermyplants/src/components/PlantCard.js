import React, { useState, useEffect } from 'react'
import { deletePlant, editPlant, getPlants } from '../actions/plantsActions'
import { connect } from 'react-redux';
import EditPlantForm from './EditPlantForm'

function PlantCard(props) {

    function handleDelete() {
        props.deletePlant(plant.id)
        props.getPlants();
    }

    const {plant} = props
    
    const[editingPlant, setEditingPlant]=useState(false)
    // form takes prop itll take plant data andplant data will be use to
    const editChanger = ()=>{
        setEditingPlant(!editingPlant)
    }

    return (

        <div className='plant-card'>
            <h2>{plant.nickname}</h2>
            <img src={plant.imageURL} alt="plant image" />
            <h3>Species</h3>
            <p>{plant.species}</p>
            <h3>Water</h3>
            <p>every{` ${plant.h2oFrequency} `}days</p>
            <div className='card-buttons'>
            <button onClick={editChanger} disabled={props.makingChanges} className='round-button edit'></button>
            <button disabled={props.makingChanges} className='round-button droplet'></button>
            <button
            disabled={props.makingChanges}
            onClick={handleDelete}
            className='round-button delete'></button>
            {editingPlant === true ? <EditPlantForm/> : null}
            </div>
            

        </div>
    )

}

export default connect(null, { deletePlant, editPlant, getPlants })(PlantCard);