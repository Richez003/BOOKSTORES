import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './header';
import Category from './categories';
import './header.css';
import './category.css';
import './addBook.css';
import './Booklist.css';
import Books from './Book';

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
            <Route path="/" element={<Books />} />
            <Route path="/categories" element={<Category />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default HomePage;
