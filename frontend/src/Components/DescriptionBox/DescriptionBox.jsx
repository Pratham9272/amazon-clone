import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>This e-commerce platform offers a seamless shopping experience for customers, providing access to a wide range of products from various categories. With secure payment gateways and reliable shipping options, it's designed to bring convenience and quality to every purchase.</p>
        <p>Our website allows users to explore an extensive collection of physical goods, services, and digital products, all available for purchase from the comfort of their home. From fashion to electronics, we cater to every shopper's needs with high-quality offerings and detailed product descriptions.</p>

      </div>
    </div>
  );
}

export default DescriptionBox;