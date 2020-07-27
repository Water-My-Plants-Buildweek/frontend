import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { addPlant, editPlant, deletePlant } from '../actions/plantsActions';
import { logOut } from '../utils/logOut';

const editPlantObject = {
  id: 0,
  nickname: 'Johnny',
  species: 'Apple Tree',
  h2oFrequency: 10,
  image: ''
};

const ReduxRenderTest = props => {

  useEffect(() => { props.deletePlant(2) }, []);

  const handleSubmit = e => {
    e.preventDefault();
    logOut();
  }

  return (
    <div>
      <h2>Redux Render Test</h2>
      {props.plants.map(plant => (
        <div>
          <p>ID: {plant.id}</p>
          <p>{plant.nickname}</p>
          <p>{plant.species}</p>
          <p>{plant.h2oFrequency} Days</p>
          <p>Image URL: {plant.image}</p>
          <br />
        </div>
      ))}
      <button onClick={handleSubmit}>Button</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    plants: state.plantsReducer.plants
  };
};

export default connect(mapStateToProps, { addPlant, deletePlant, editPlant })(ReduxRenderTest);