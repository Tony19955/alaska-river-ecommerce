const INITIAL_STATE = {
  sections: [    
    {
      title: 'womens',
      imageUrl: 'https://i.ibb.co/gJ6XJwx/womens.jpg',     
      id: 1,
      linkUrl: 'shop/womens'
    },
    {
      title: 'mens',
      imageUrl: 'https://i.ibb.co/zJCStqw/mens2.jpg',     
      id: 2,
      linkUrl: 'shop/mens'
    },
    {
      title: 'kids',
      imageUrl: 'https://i.ibb.co/XzX2tj4/kids.jpg',     
      id: 3,
      linkUrl: 'shop/kids'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;