import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import shopIcon from '../assets/shop.svg'
//context 
import { cartContext } from '../Contexts/CartContextProvider';

const Navbar = () => {

    const {state} = useContext(cartContext)

    return (
        <div>
            <Link to='/products'>Products</Link>
            <div>
            <Link to='/cart'><img src={shopIcon} alt='shop'/> </Link>
            <span>{state.counterItem}</span>
            </div>
        </div>
    );
};

export default Navbar;