import { LOG_ERROR, UPDATE_PLANTS } from '../actions/plantsActions';

const initialState = {
  plants: [
    {
      id: 0,
      nickname: 'Leaf Erikson',
      species: 'Arctic Thyme',
      h2oFrequency: 14,
      imageURL: 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80'
    },
    {
      id: 1,
      nickname: 'Po',
      species: 'Bamboo',
      h2oFrequency: 1,
      imageURL: 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80'
    },
    {
      id: 2,
      nickname: 'Penny',
      species: 'Pennywort Begonia',
      h2oFrequency: 14,
      imageURL: 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80'
    },
  ],
  message: ''
};

export const plantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PLANTS:
      return {
        ...state,
        plants: action.payload,
        message: ''
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