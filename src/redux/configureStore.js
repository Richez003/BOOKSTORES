import { createStore, combineReducers } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import checkReducer from './categories/categories';

const reducer = combineReducers({
  booksReducer,
  checkReducer,
});

const store = createStore(
  reducer,
);

export default store;
