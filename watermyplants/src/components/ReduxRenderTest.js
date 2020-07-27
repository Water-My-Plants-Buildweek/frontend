import React from 'react';
import { connect } from 'react-redux';

const ReduxRenderTest = props => {

  return (
    <div>
      <h2>Redux Render Test</h2>
      {props.plants.map(plant => (
        <div>
          <p>{plant.nickname}</p>
          <p>{plant.species}</p>
          <p>{plant.h2oFrequency}</p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    plants: state.plantsReducer.plants
  };
};

export default connect(mapStateToProps, {})(ReduxRenderTest);