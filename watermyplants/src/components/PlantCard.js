import React, { useState, useEffect } from "react";
import { deletePlant, editPlant, getPlants } from "../actions/plantsActions";
import { connect } from "react-redux";
import EditPlantForm from "./EditPlantForm";

function PlantCard(props) {
    function handleDelete() {
        props.deletePlant(plant.id);
        props.getPlants();
    }

    const { plant } = props;
    const plantImage = plant.imageURL

    const [editingPlant, setEditingPlant] = useState(false);
    // form takes prop itll take plant data andplant data will be use to
    const editChanger = () => {
        setEditingPlant(!editingPlant);
    };

    return (
        <div className="card">
            {editingPlant === false ? (
                <>

                    <div className='plant-image' style={{ backgroundImage: "url(" + plantImage + ")" }} >
                        <div className='plant-title'>
                        <h2>{plant.nickname}</h2>
                        <h3>{plant.species}</h3>
                        <p>Water every{plant.h2oFrequency === 1 ? ` day` : ` ${plant.h2oFrequency} days`}</p>
                        </div>
                        
                    </div>
                    
            
                    <div className="card-buttons">
                        <button
                            onClick={editChanger}
                            disabled={props.makingChanges}
                            className="round-button edit"
                        ></button>
                        <button
                            disabled={props.makingChanges}
                            className="round-button droplet"
                        ></button>
                        <button
                            disabled={props.makingChanges}
                            onClick={handleDelete}
                            className="round-button delete"
                        ></button>
                    </div>
                </>) : null}
            {editingPlant === true ? (
                <div> <EditPlantForm plant={plant} setEditingPlant={setEditingPlant} /></div>
            ) : null}
        </div>


    );
}

export default connect(null, { deletePlant, editPlant, getPlants })(PlantCard);
