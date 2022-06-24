import React from 'react';
import { useSelector } from 'react-redux';
import BookList from './BookList';
import AddBooks from './addBooks';

const Books = () => {
  const bookItems = useSelector((state) => state.booksReducer);

  return (
    <main className="book-list-container">
      <section className="book-list">
        {
          bookItems.map((book) => (
            <BookList
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.author}
              categories={book.category}
            />
          ))
        }
      </section>
      <AddBooks />
    </main>
  );
};

export default Books;
