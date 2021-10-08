import React from 'react';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';

const OrderReview = () => {
    const [products, setProducts]= useProducts();
    const [cart]= useCart(products);
    return (
        <div>
            <h1>{products.length}</h1>
            <h2>This is Order Review</h2>
        </div>
    );
};

export default OrderReview;