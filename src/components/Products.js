import React from 'react';
import { shorten } from '../helper/shorten';

const Products = ({productData}) => {
    return (
        <div>
            <img src={productData.image} style={{width : "200px"}}/>
            <h3>{shorten(productData.title)}</h3>
            <p>{`${productData.price}$`}</p>
            <div>
              <a href='#'>Details</a>  
            </div>
            <div>
                <button>BUTTON</button>
            </div>
        </div>
    );
};

export default Products;