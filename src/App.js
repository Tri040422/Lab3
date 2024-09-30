import React, { useState, useEffect } from 'react';
import Header from './Header';
import CardItem from './CardItem';
import SelectedItemsPopup from './SelectedItemsPopup';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '@fortawesome/fontawesome-free/css/all.css';

const initialItems = [
  { id: 1, name: 'Margherita Pizza', price: 24, image: '/Images/menu1.jpg'},
  { id: 2, name: 'Mushroom Pizza', price: 25, image: '/Images/menu2.jpg' },
  { id: 3, name: 'Hawaiian Pizza', price: 30, image: '/Images/menu3.jpg' },
  { id: 4, name: 'Pesto Pizza', price: 30, image: '/Images/menu4.jpg' },
];

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  // Retrieve cart from localStorage on mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cartItems'));
    if (storedCart) {
      setCartItems(storedCart);
    }
  }, []);

  // Save cart to localStorage when cartItems change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(cartItems.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const updateCart = (item, action) => {
    const updatedCart = cartItems.map(cartItem => {
      if (cartItem.id === item.id) {
        return action === 'add'
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : { ...cartItem, quantity: cartItem.quantity - 1 };
      }
      return cartItem;
    }).filter(cartItem => cartItem.quantity > 0);
    setCartItems(updatedCart);
  };

  const openCart = () => {
    setShowPopup(true);
  };

  const closeCart = () => {
    setShowPopup(false);
  };

  return (
    <>
      {/* Navbar with Cart */}
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
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-danger" type="submit">
                <i className="fa fa-search"></i>
              </button>
            </form>
          </div>
          {/* Cart Button */}
          <button className="btn btn-danger position-relative" onClick={openCart}>
            <i className="fa fa-shopping-cart"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
              {cartItems.reduce((total, item) => total + item.quantity, 0)}
            </span>
          </button>
        </div>
      </nav>

      {/* Carousel */}
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./Images/pizza1.jpg" className="" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./Images/pizza2.jpg" className="" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./Images/pizza3.jpg" className="" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Menu Section with Cart Functionality */}
      <div className="container">
        <div className="row">
          <h2>Our Menu</h2>
          {initialItems.map(item => (
            <div className="col-md-3 mb-2" key={item.id}>
              <CardItem item={item} addToCart={addToCart} />
            </div>
          ))}
        </div>
      </div>

      {/* Booking Form */}
      <div className="container">
        <div className="row">
          <h2 className="text-center">Book your Table</h2>
          <div className="row mb-3">
            <div className="col">
              <input type="text" className="form-control" placeholder="Your name" />
            </div>
            <div className="col">
              <input type="text" className="form-control" placeholder="Your email" />
            </div>
            <div className="col">
              <select className="form-select">
                <option selected>Select a Service</option>
                <option>...</option>
              </select>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <textarea className="form-control" rows="5" placeholder="Please write your comment"></textarea>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input type="submit" className="btn btn-warning text-white" value="Send Message" />
            </div>
          </div>
        </div>
      </div>

      {/* Cart Popup */}
      {showPopup && <SelectedItemsPopup cartItems={cartItems} closeCart={closeCart} updateCart={updateCart} />}
    </>
  );
}

export default App;
