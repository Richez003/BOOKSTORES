import { createStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import booksReducer from './books/books';
import checkReducer from './categories/categories';

const reducer = combineReducers({
  booksReducer,
  checkReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
