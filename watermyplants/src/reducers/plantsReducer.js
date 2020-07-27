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
  ]
};

export const plantsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  };
};