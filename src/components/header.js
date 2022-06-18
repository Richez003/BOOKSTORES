import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.PureComponent {
  render() {
    return (
      <div className="head">
        <h1>Bookstore CMS</h1>
        <nav>
          <Link to="/">Book</Link>
          <Link to="/categories">Categories</Link>
        </nav>
      </div>
    );
  }
}

export default Header;

//  class Navigate extends React.PureComponent {
//     render() {
//       return (
//         <header className="head">
//           <h1>Math Magician</h1>
//           <nav>
//             <Link to="/">HomePage|</Link>
//             <Link to="/calculator">Calculator</Link>
//             <Link to="/quote">|Quotes</Link>
//           </nav>
//         </header>

//       );
//     }
//   }
//   export default Navigate;
