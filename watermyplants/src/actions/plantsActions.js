import { axiosWithAuth } from '../utils/axiosWithAuth';
export const LOG_ERROR = 'LOG_ERROR';
export const UPDATE_PLANTS = 'UPDATE_PLANTS';
export const MAKING_CHANGES = 'MAKING_CHANGES';

export const getPlants = () => dispatch => {
  axiosWithAuth()
    .get('/api/plants')
    .then(res => {
      console.log(res);
      dispatch({ type: UPDATE_PLANTS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: LOG_ERROR, payload: err });
    });
};

export const addPlant = plant => dispatch => {
  dispatch({ type: MAKING_CHANGES });
  axiosWithAuth()
    .post('/api/plants', plant)
    .then(res => {
      dispatch({ type: UPDATE_PLANTS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: LOG_ERROR, payload: err });
    });
};

export const deletePlant = plantId => dispatch => {
  dispatch({ type: MAKING_CHANGES });
  axiosWithAuth()
    .delete(`/api/plants/${plantId}`)
    .then(res => {
      dispatch({ type: UPDATE_PLANTS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: LOG_ERROR, payload: err });
    });
};

export const editPlant = plant => dispatch => {
  dispatch({ type: MAKING_CHANGES });
  axiosWithAuth()
    .put(`/api/plants/${plant.id}`, plant)
    .then(res => {
      dispatch({ type: UPDATE_PLANTS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: LOG_ERROR, payload: err });
    });
};