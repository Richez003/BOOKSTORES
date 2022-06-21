const initialState = [];
export const addBook = (payload) => ({
  type: 'ADD_BOOK',
  payload,
});

export const removeBook = (id) => ({
  type: 'REMOVE_BOOK',
  id,
});

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, action.payload];
    case 'REMOVE':
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default booksReducer;
