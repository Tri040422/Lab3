import React from 'react';

const SelectedItemsPopup = ({ cart, updateQuantity, closePopup }) => {
  return (
    <div className="modal show" style={{ display: 'block' }} onClick={closePopup}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Your Cart</h5>
            <button type="button" className="btn-close" onClick={closePopup}></button>
          </div>
          <div className="modal-body">
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cart.map(item => (
                <div key={item.id} className="d-flex justify-content-between">
                  <span>{item.name} (${item.price})</span>
                  <div>
                    <button onClick={() => updateQuantity(item.id, -1)} className="btn btn-sm btn-danger">-</button>
                    <span className="mx-2">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} className="btn btn-sm btn-success">+</button>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={closePopup}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedItemsPopup;
