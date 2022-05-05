import React, { useContext } from 'react';
import { shorten, isInCart, quantityCount } from '../helper/shorten';
import { Link } from 'react-router-dom';
import trashIcon from '../assets/trash.svg'

//Context
import { cartContext } from '../Contexts/CartContextProvider';

const Products = ({productData}) => {

        const { state , dispatch } = useContext(cartContext)
    return (
        <div>
            <img src={productData.image} style={{width : "200px"}}/>
            <h3>{shorten(productData.title)}</h3>
            <p>{`${productData.price}$`}</p>
            <div>
              <Link to={`/products/${productData.id}`}>Details</Link>  
            </div>
            <div>
                {
                    quantityCount(state , productData.id) > 1 && <button onClick={() => dispatch({type: "DECREASE" , payload: productData})}>-</button>}

                {quantityCount(state , productData.id) === 1 && <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: productData})}><img src={trashIcon} alt='remove' style={{width: "20px"}}/></button>}
              {
                  isInCart(state , productData.id) ?
                  <button onClick={() => dispatch({type: "INCREASE" , payload: productData})}>+</button> :
                  <button onClick={() => dispatch({type: "ADD_ITEM" , payload: productData})}>ADD-ITEM</button>
                }
            
            </div>
        </div>
    );
};

export default Products;