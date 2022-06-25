import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux/es/exports';
import { postBooks } from '../redux/books/books';

const AddBooks = () => {
  const initialState = {
    title: '',
    author: '',
    category: '',
  };

  const [inputState, setState] = useState(initialState);

  const handleChange = (e) => {
    setState({
      ...inputState,
      [e.target.name]: [e.target.value],
    });
  };

  const dispatch = useDispatch();

  const submitBook = (event) => {
    event.preventDefault();
    document.querySelector('form').reset();

    const newBook = {
      id: uuidv4(),
      title: inputState.title[0],
      author: inputState.author[0],
      category: inputState.category,
    };

    dispatch(postBooks(newBook));
  };

  const categoryItems = [
    'Fantasy',
    'Anime',
    'Adult Movie',
    'Education',
    'Entertainment',
    'Sport',
    'Sci-Fi',
    'Indigeneous',
  ];

  return (
    <form onSubmit={submitBook} className="input-book-container">
      <h1>Add New Book</h1>
      <div className="book-input">
        <input type="text" placeholder="Book Title" name="title" id="booktile" onChange={handleChange} required />
        <input type="text" placeholder="Book Author" name="author" onChange={handleChange} required />
        <div className="form-wrapper">
          <select name="category" id="categories" onChange={handleChange} required>
            <option value="Undefine">Select a category</option>
            {categoryItems.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}

          </select>
          <button type="submit" id="add-btn" onClick={submitBook}>ADD BOOK</button>
        </div>
      </div>
    </form>
  );
};

export default AddBooks;
