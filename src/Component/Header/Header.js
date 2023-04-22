import React from 'react';
// import { FaBars } from 'react-icons/fa';
import './Header.css';

function Header() {
  return (
    <header>
      <h1>My App</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
