import React, { useState, useEffect } from 'react';
import { deletePlant, editPlant } from '../actions/plantsActions';
import { connect } from 'react-redux';

function PlantCard(props) {

    return (

        <div className='plant-card'>

        </div>
    );

}

export default connect(null, { deletePlant, editPlant })(PlantCard);