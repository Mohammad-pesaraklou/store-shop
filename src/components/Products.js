import React, { useContext } from 'react';
import { shorten, isInCart, quantityCount } from '../helper/shorten';
import { Link } from 'react-router-dom';
import trashIcon from '../assets/trash.svg'

//Context
import { cartContext } from '../Contexts/CartContextProvider';

//style
import styles from './Product.module.css'

const Products = ({productData}) => {

        const { state , dispatch } = useContext(cartContext)
    return (
        <div className={styles.container}>
            <img src={productData.image} className={styles.cardImage}/>
            <h3>{shorten(productData.title)}</h3>
            <p>{`${productData.price}$`}</p>
            <div className={styles.linkContainer}>
              <Link  to={`/products/${productData.id}`}>Details</Link>  
            <div className={styles.buttonContainer}>
                {quantityCount(state, productData.id) === 1 &&
                 <button className={styles.smallButton} onClick={() => dispatch({type: "REMOVE_ITEM", payload: productData})}><img src={trashIcon} alt="trash" /></button>}
                {quantityCount(state, productData.id) > 1 && <button className={styles.smallButton} onClick={() => dispatch({type: "DECREASE", payload: productData})}>-</button>}
                {quantityCount(state, productData.id) > 0 && <span className={styles.counter}>{quantityCount(state, productData.id)}</span>}
                { 
                  isInCart(state , productData.id) ?
                  <button className={styles.smallButton} onClick={() => dispatch({type: "INCREASE" , payload: productData})}>+</button> :
                  <button onClick={() => dispatch({type: "ADD_ITEM" , payload: productData})}>ADD-ITEM</button>
                }
            
            </div>
        </div>

    </div>
    );
};

export default Products;