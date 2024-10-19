import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import { Link } from 'react-router-dom';  // Import Link component
import dropdown_icon from '../Components/Assets/dropdown_icon.png';

const ShopCategory = (props) => {
    const { all_product } = useContext(ShopContext);

    // Filter products based on the passed category prop
    const filteredProducts = all_product.filter(item => item.category === props.category);

    return (
        <div className='shop-category'>
            {/* Banner */}
            <img className='banner' src={props.banner} alt={`${props.category} banner`} />

            {/* Sorting Section */}
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-20</span> out of {filteredProducts.length} products
                </p>
                <div className="shopcategory-sort">
                    <button>Sort by<img src={dropdown_icon} alt="Sort Dropdown Icon" /></button>
                </div>
            </div>

            {/* Products Grid */}
            <div className="shopcategory-products">
                {filteredProducts.map((item, i) => (
                    <div className="item" key={i}>
                        {/* Add Link to navigate to product page */}
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
                ))}
            </div>
            <div className="explore-more">
                Explore More
            </div>

        </div>
    );
};

export default ShopCategory;