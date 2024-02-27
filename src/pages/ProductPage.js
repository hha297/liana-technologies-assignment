import React from 'react';
import { NavLink } from 'react-router-dom';

const ProductPage = () => {
    return (
        <div>
            <h1>Product Page</h1>
            <NavLink
                className={
                    'hover:underline text-primary mt-10 block'
                }
                to="/company"
            >
                Go to 404 page and test back to previous
                button page button
            </NavLink>
        </div>
    );
};

export default ProductPage;
