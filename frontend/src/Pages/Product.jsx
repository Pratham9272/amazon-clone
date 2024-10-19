import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/ReltedProducts/RelatedProducts';

const Product = () => {
    // Get productId from the URL
    const { productId } = useParams();

    // Scroll to the top when the component renders
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);  // The empty array ensures this runs only once when the component mounts

    // Log productId for debugging
    console.log("Product ID from URL:", productId);

    // Accessing the product list from context
    const { all_product } = useContext(ShopContext);

    // Log all_product for debugging
    console.log("All Products:", all_product);

    // Finding the product using the productId from the URL
    const product = all_product.find((e) => e.id === Number(productId));

    // Log the found product
    console.log("Found Product:", product);

    // Display the product details if the product exists
    return (
        <div>
            {product ? (
                <>
                    <Breadcrum product={product} />
                    <ProductDisplay product={product}/>
                    <DescriptionBox/>
                    <RelatedProducts/>
                </>
            ) : (
                <p>Product not found.</p>
            )}
        </div>
    );
};

export default Product;
