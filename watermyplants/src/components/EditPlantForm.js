import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { editPlant } from "../actions/plantsActions";

const initialPlantFormValues = {
  nickname: "",
  species: "",
  h2oFrequency: 1,
  imageURL: "",
};



function EditPlantForm(props) {
  const [plantFormValues, setPlantFormValues] = useState(props.plant);

  function newPlantObj() {
    return {
      ...plantFormValues,
      id: props.plant.id,
    };
  }

  const onSubmit = (evt) => {
    evt.preventDefault();
    props.editPlant(newPlantObj());
    props.setEditingPlant(false)
  };
 
  function handleCancel(){
      props.setEditingPlant(false)
  }
  const onChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;

    setPlantFormValues({
      ...plantFormValues,
      [name]: value,
    });
  };

  return (
  <div className="edit-plant-container">
      <div className="edit-plant">
        <h2>Edit plant</h2>
        <form onSubmit={onSubmit}>
          <label htmlFor="nickname">
            <input
              placeholder="Nickname"
              value={plantFormValues.nickname}
              onChange={onChange}
              name="nickname"
            />
          </label>
          <label htmlFor="Species">
            <input
              placeholder="Species"
              value={plantFormValues.species}
              onChange={onChange}
              name="species"
            />
          </label>
          <label htmlFor="watering frequency">
            Water every{" "}
            <input
              className="number-input"
              type="number"
              min="1"
              value={plantFormValues.h2oFrequency}
              onChange={onChange}
              name="h2oFrequency"
            />{" "}
            day(s)
          </label>
          <label htmlFor="imageURL">
            <input
              placeholder="Image URL"
              value={plantFormValues.imageURL}
              onChange={onChange}
              name="imageURL"
            />
          </label>
          <div className="add-cancel-buttons">
            <button className="add-btn button">Update</button>
            <a className="cancel-btn button" onClick={handleCancel}>Cancel</a>
          </div>
        </form>
      </div>
      </div>
  );
}

export default connect(null, { editPlant })(EditPlantForm);
