import React, { useState, useEffect } from 'react'
import { deletePlant, editPlant, getPlants } from '../actions/plantsActions'
import { connect } from 'react-redux';

function PlantCard(props) {

    function handleDelete() {
        props.deletePlant(plant.id)
        props.getPlants();
    }

    const {plant} = props
    
    return (

        <div className='plant-card'>
            <h2>{plant.nickname}</h2>
            <img src={plant.imageURL} alt="plant image" />
            <h3>Species</h3>
            <p>{plant.species}</p>
            <h3>Water</h3>
            <p>every{` ${plant.h2oFrequency} `}days</p>
            <div className='card-buttons'>
            <button disabled={props.makingChanges} className='round-button edit'></button>
            <button disabled={props.makingChanges} className='round-button droplet'></button>
            <button
            disabled={props.makingChanges}
            onClick={handleDelete}
            className='round-button delete'></button>
            </div>
            

        </div>
    )

}

export default connect(null, { deletePlant, editPlant, getPlants })(PlantCard);