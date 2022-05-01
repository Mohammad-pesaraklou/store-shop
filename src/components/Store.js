import React,{ useContext } from 'react';
import { productsContext } from '../Contexts/ContextProvider';
import Products from './Products';

const Store = () => {
    const products = useContext(productsContext)
    return (
        <div style={{display : "flex" , flexWrap : "wrap" , justifyContent : "space-between"}}>
       {
           products.map(product => <Products key={product.id} productData={product}/>)
       }
        </div>
    );
};

export default Store;