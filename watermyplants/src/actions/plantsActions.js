import { axiosWithAuth } from '../utils/axiosWithAuth';
export const LOG_ERROR = 'LOG_ERROR';
export const UPDATE_PLANTS = 'UPDATE_PLANTS';

export const getPlants = () => dispatch => {
  axiosWithAuth()
    .get('/api/plants')
    .then(res => {
      dispatch({ type: UPDATE_PLANTS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: LOG_ERROR, payload: err });
    });
};

export const addPlant = plant => dispatch => {
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
  axiosWithAuth()
    .post(`/api/plants/${plantId}`)
    .then(res => {
      dispatch({ type: UPDATE_PLANTS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: LOG_ERROR, payload: err });
    });
};

export const editPlant = plant => dispatch => {
  axiosWithAuth()
    .put(`/api/plants/${plant.id}`, plant)
    .then(res => {
      dispatch({ type: UPDATE_PLANTS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: LOG_ERROR, payload: err });
    });
};