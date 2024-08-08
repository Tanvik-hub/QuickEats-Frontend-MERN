import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <section className="topBarSection">
      <div className="companyTitle">
        <Link to='/' className='link'>
          <h1>QuickEats🍝</h1>
        </Link>
      </div>
      <div className="searchBar">
        <input type="text" className="searchInput" placeholder="Search..." />
      </div>
      <div className="navLinks">
        <Link to='/about' className='link'>
          About
        </Link>
      </div>
      <div className="userAuth">
        <Link to='/login' className='link'>
          LOGIN/SIGNUP
        </Link>
      </div>
    </section>
  );
}

export default TopBar;
