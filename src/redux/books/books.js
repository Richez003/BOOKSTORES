import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const initialState = [
  {
    id: uuidv4(),
    title: 'Whales',
    author: 'Daniel Rage',
    category: 'Animes',
  },
  {
    id: uuidv4(),
    title: 'Unbeatable',
    author: 'Tiger Hood',
    category: 'Sports',
  },
  {
    id: uuidv4(),
    title: 'Within is The Source',
    author: 'Phil Colins',
    category: 'Music',
  },
];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);

    default:
      return state;
  }
};

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export default booksReducer;
