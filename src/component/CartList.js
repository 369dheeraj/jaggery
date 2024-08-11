import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import '../stylesheet/cartlist.css'

function CartList({ isOpen, onClose, products }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
          onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content" ref={modalRef}>
      {products.map((product, index) => (
        <div key={index}>
          {/* Access product details here */}
          <h1>{product.title}</h1>
          {/* Other product details */}
        </div>
      ))}
      </div>
    </div>
  );
}

export default CartList;
