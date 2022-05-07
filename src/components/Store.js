import React,{ useContext } from 'react';
import { productsContext } from '../Contexts/ContextProvider';
import Products from './Products';
import styles from './shop.module.css'
const Store = () => {
    const products = useContext(productsContext)
    return (
        <div className={styles.container} >
       {
           products.map(product => <Products key={product.id} productData={product}/>)
       }
        </div>
    );
};

export default Store;