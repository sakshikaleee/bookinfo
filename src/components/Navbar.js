import React from 'react';
import './Navbar.css'; // Import the CSS file

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/books">Books</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
