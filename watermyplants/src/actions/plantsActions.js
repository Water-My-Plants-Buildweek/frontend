export const ADD_PLANT = 'ADD_PLANT';
export const DELETE_PLANT = 'DELETE_PLANT';
export const EDIT_PLANT = 'EDIT_PLANT';

//These action creators will later become axios thunks when backend endpoints are working
export const addPlant = plant => {
  return { type: ADD_PLANT, payload: plant };
};

export const deletePlant = plantId => {
  return { type: DELETE_PLANT, payload: plantId };
};

export const editPlant = plant => {
  return { type: EDIT_PLANT, payload: plant };
};