import React from 'react';
import AddBooks from './addBooks';
import './Book.css';
import BookList from './BookList';

const Book = () => (
  <main className="book-list-container">
    <section className="book-list">
      <BookList
        title="The Hunger Games"
        author="Suzane Colins"
        categories="Action"
      />
    </section>
    <AddBooks />
  </main>
);

export default Book;
