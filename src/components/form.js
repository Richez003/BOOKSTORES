import React from 'react';

const AddBooks = () => (
  <div className="form">
    <h2>Add Books</h2>
    <input
      value="Book Title"
      placeholder="Book Title"
      className="title"
    />
    <input
      value="Author"
      placeholder="Author"
      className="author"
    />
  </div>
);
export default AddBooks;
