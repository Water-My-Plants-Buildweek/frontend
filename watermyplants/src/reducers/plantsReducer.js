import { LOG_ERROR, UPDATE_PLANTS, MAKING_CHANGES } from '../actions/plantsActions';

const initialState = {
  plants: [],
  message: '',
  makingChanges: false
};

export const plantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKING_CHANGES:
      return {
        ...state,
        makingChanges: true
      }
    case UPDATE_PLANTS:
      return {
        ...state,
        plants: action.payload,
        message: '',
        makingChanges: false
      };
    case LOG_ERROR:
      return {
        ...state,
        message: action.payload
      };
    default:
      return state;
  };
};