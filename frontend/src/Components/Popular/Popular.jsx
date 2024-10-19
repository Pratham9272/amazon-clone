import React, { useEffect, useState } from 'react';
import './Popular.css';

import { Link } from 'react-router-dom'; // Import Link component

const Popular = () => {

  const [popularProducts,setPopularProducts] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/popularinwomen')
    .then((response)=>response.json())
    .then((data)=>setPopularProducts(data));
  },[])

  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {popularProducts.map((item, i) => {
          return (
            <div className="item" key={i}>
              {/* Wrap with Link to navigate to the product page */}
              <Link to={`/product/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <img src={item.image} alt={item.name} />
                <div className="item-info">
                  <div className="item-name">{item.name}</div>
                  <div className="item-pricing">
                    <div className="new-price">₹{item.new_price}</div>
                    <div className="old-price">₹{item.old_price}</div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
