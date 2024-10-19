import React, { useState } from 'react';  // Import useState
import './RelatedProducts.css';
import data_product from '../Assets/data';
import { Link } from 'react-router-dom';  // Import Link

const RelatedProducts = () => {
  const [activeIndex, setActiveIndex] = useState(null); // State for active item

  const handleClick = (index) => {
    setActiveIndex(index); // Set the active index on click
  };

  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {data_product.map((item, i) => {
          const isActive = activeIndex === i; // Check if this item is active
          return (
            <div className={`item ${isActive ? 'active' : ''}`} key={i} onClick={() => handleClick(i)}> {/* Add onClick handler */}
              <Link to={`/product/${item.id}`}>
                <img src={item.image} alt={item.name} />
              </Link>
              <div className="item-info">
                <div className="item-name">{item.name}</div>
                <div className="item-pricing">
                  <div className="new-price">₹{item.new_price}</div>
                  <div className="old-price">₹{item.old_price}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
