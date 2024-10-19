import React, { useEffect, useState } from 'react';
import './NewCollections.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const NewCollections = () => {

  const [new_collection,setNew_collection] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/newcollections')
    .then((response)=>response.json())
    .then((data)=>setNew_collection(data))
  },[])
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item, i) => {
          return (
            <div className="item" key={i}>
              {/* Wrap the product with Link to navigate to the product detail page */}
              <Link to={`/product/${item.id}`}>
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

export default NewCollections;
