import React from 'react';
import AddBooks from './addBooks';
import BookList from './BookList';

const Book = () => (
  <main className="book-list-container">
    <section className="book-list">
      <BookList
        title="The Hunger Games"
        author="Suzane Colins"
        categories="Action"
      />
      <BookList
        title="Dune"
        author="Frank Herbert"
        categories="Science Fiction"
      />
      <BookList
        title="Lady in Red"
        author="Phil Colins"
        categories="Entertainment"
      />
    </section>
    <AddBooks />
  </main>
);

export default Book;
