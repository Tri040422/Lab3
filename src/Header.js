import React from 'react';

const Header = ({ totalItems, togglePopup }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">Pizza House</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
          <button className="btn btn-danger position-relative" onClick={togglePopup}>
            <i className='fa fa-shopping-cart'></i>
            {totalItems > 0 && <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{totalItems}</span>}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
