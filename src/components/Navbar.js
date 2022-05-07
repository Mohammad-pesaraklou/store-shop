import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import shopIcon from '../assets/shop.svg'
import styles from './Navbar.module.css'
//context 
import { cartContext } from '../Contexts/CartContextProvider';

const Navbar = () => {

    const {state} = useContext(cartContext)

    return (
        <div className={styles.mainContainer}>
        <div className={styles.container}>
            <Link className={styles.productLink} to='/products'>Products</Link>
            <div className={styles.iconContainer}>
            <Link to='/cart'><img src={shopIcon} alt='shop'/> </Link>
            <span className={styles.counter}>{state.counterItem}</span>
            </div>
        </div>
        </div>
    );
};

export default Navbar;