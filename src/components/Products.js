import React from 'react';
import { shorten } from '../helper/shorten';
import { Link } from 'react-router-dom';

const Products = ({productData}) => {
    return (
        <div>
            <img src={productData.image} style={{width : "200px"}}/>
            <h3>{shorten(productData.title)}</h3>
            <p>{`${productData.price}$`}</p>
            <div>
              <Link to={`/products/${productData.id}`}>Details</Link>  
            </div>
            <div>
                <button>BUTTON</button>
            </div>
        </div>
    );
};

export default Products;