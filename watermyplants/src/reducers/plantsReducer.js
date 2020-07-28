import { ADD_PLANT, DELETE_PLANT, EDIT_PLANT } from '../actions/plantsActions';

const initialState = {
  plants: [
    {
      id: 0,
      nickname: 'Leaf Erikson',
      species: 'Arctic Thyme',
      h2oFrequency: 14,
      image: 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80'
    },
    {
      id: 1,
      nickname: 'Po',
      species: 'Bamboo',
      h2oFrequency: 1,
      image: 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80'
    },
    {
      id: 2,
      nickname: 'Penny',
      species: 'Pennywort Begonia',
      h2oFrequency: 14,
      image: 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80'
    },
  ],
  message: ''
};

export const plantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLANT:
      return {
        ...state,
        plants: [
          ...state.plants,
          action.payload
        ]
      };
    case DELETE_PLANT:
      return {
        ...state,
        plants: state.plants.filter(plant => plant.id !== action.payload)
      };
    case EDIT_PLANT:
      return {
        ...state,
        plants:
          state.plants.map(plant => {
            if (plant.id === action.payload.id) {
              return action.payload;
            } else {
              return plant;
            }
          })
      };
    default:
      return state;
  };
};