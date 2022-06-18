import React from 'react';
import AddBooks from './form';

const BookList = () => {
  const bookProps = {
    title: 'Dune',
    author: 'Frank Herbert',
  };

  const { title, author } = bookProps;

  return (
    <div>
      <h3>Actions</h3>
      <h1>{title}</h1>
      <p>{author}</p>
      <button type="button">Remove</button>

      <AddBooks />
    </div>
  );
};
export default BookList;
