import React from 'react';

function Header() {
  return (
    <header className='bg-dark'>
      <nav className="container d-flex align-items-center gap-3 p-2">
        <i className="bi bi-globe fs-3 text-white"></i>
        <p className="text-white fs-2 mb-0 fw-bold">News Portal</p>
      </nav>
    </header>
  );
}

export default Header;
