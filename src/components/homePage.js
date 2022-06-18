import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookList from './Book';
import Header from './header';
import Category from './categories';
import './header.css';
import './book.css';
import './form.css';
import './category.css';

class HomePage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/categories" element={<Category />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default HomePage;
