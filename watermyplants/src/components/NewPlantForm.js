import React, { useState, useEffect } from 'react';
import PlantCard from './PlantCard';
import { connect } from 'react-redux';
import { addPlant } from '../actions/plantsActions';

function NewPlantForm(props) {

    return (

        <div>
            <a href='#' className='round-button add'></a>
            <PlantCard />
        </div>
    );

}

export default connect(null, { addPlant })(NewPlantForm);