import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '@fortawesome/fontawesome-free/css/all.css';
import Header from './Header';
import SelectedItemsPopup from './SelectedItemsPopup';
import CardItem from './CardItem';

function App() {
  const [cart, setCart] = useState({});
  const [totalItems, setTotalItems] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || {};
    setCart(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    setTotalItems(Object.values(cart).reduce((sum, item) => sum + item.count, 0));
  }, [cart]);

  const addToCart = (item) => {
    const newCart = { ...cart };
    if (newCart[item.id]) {
      newCart[item.id].count += 1;
    } else {
      newCart[item.id] = { ...item, count: 1 };
    }
    setCart(newCart);
  };

  const handleQuantityChange = (id, delta) => {
    const newCart = { ...cart };
    newCart[id].count += delta;
    if (newCart[id].count <= 0) {
      delete newCart[id];
    }
    setCart(newCart);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <Header totalItems={totalItems} togglePopup={togglePopup} />
      <div className='container-fluid bg-dark text-white'>
        <div className="row">
          <div className="col-lg-12 mb-5">
            <div className='row'>
              <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="./Images/pizza1.jpg" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                      <h5>First slide label</h5>
                      <p>Some representative placeholder content for the first slide.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src="./Images/pizza2.jpg" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Second slide label</h5>
                      <p>Some representative placeholder content for the second slide.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src="./Images/pizza3.jpg" className="d-block w-100" alt="..."/>
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
            </div>
          </div>

          <div className="col-lg-12 mb-5">
            <div className="container">
              <h2>Our Menu</h2>
              <div className="row">
                {[
                  { id: 1, title: "Margherita Pizza", price: 24.00, imgSrc: "./Images/menu1.jpg" },
                  { id: 2, title: "Mushroom Pizza", price: 25.00, imgSrc: "./Images/menu2.jpg" },
                  { id: 3, title: "Hawaiian Pizza", price: 30.00, imgSrc: "./Images/menu3.jpg" },
                  { id: 4, title: "Pesto Pizza", price: 30.00, imgSrc: "./Images/menu4.jpg" },
                ].map(item => (
                  <CardItem key={item.id} item={item} addToCart={addToCart} />
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="container">
              <div className='row'>
                <h2 className='text-center'>Book your Table</h2>
                <div className="row mb-3">
                  <div className="col">
                    <input type="text" className="form-control" placeholder="Your name" aria-label="Your name" />
                  </div>
                  <div className="col">
                    <input type="text" className="form-control" placeholder="Your email" aria-label="Your email" />
                  </div>
                  <div className="col">
                    <select id="inputState" className="form-select">
                      <option selected>Select a Service</option>
                      <option>...</option>
                    </select>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <textarea className="form-control" rows="5" placeholder="Please write your comment" aria-label="Please write your comment"></textarea>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <input type='submit' className='btn btn-warning text-white' value="Send Message"></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>

      {showPopup && (
        <SelectedItemsPopup cart={cart} onClose={togglePopup} onQuantityChange={handleQuantityChange} />
      )}
    </>
  );
}

export default App;
