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
    <button className="addbtn" type="button">Add</button>
  </div>
);
export default AddBooks;
