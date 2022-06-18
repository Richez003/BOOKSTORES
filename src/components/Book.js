import React from 'react';
import AddBooks from './form';

const BookList = () => {
  const bookProps = {
    title: 'Dune',
    author: 'Frank Herbert',
  };

  const { title, author } = bookProps;

  return (
    <div className="action">
      <h3>Actions</h3>
      <h2>{title}</h2>
      <p>{author}</p>
      <button className="remove" type="button">Remove</button>
      <AddBooks />
    </div>
  );
};
export default BookList;
