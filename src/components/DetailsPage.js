import React, { useContext } from 'react';
import { productsContext } from '../Contexts/ContextProvider';
import { Link, useParams } from 'react-router-dom';
//style
import styles from './ProductDetail.module.css'

const DetailsPage = (props) => {

    const params = useParams();
    const id = params.id;
    const data = useContext(productsContext);
    const product = data[id - 1];
    const {image , title , description , category , price} = product;


    return (
        <div className={styles.container}>
        <img className={styles.image} src={image} alt='pic' />
        <div className={styles.textContainer}>
            <h3>{title}</h3>
            <p className={styles.description}>{description}</p>
                <p className={styles.category}><span>Category:</span> {category}</p>
            <div className={styles.buttonContainer}>
                <span className={styles.price}>{price} $</span>
                <Link to="/products">Back to Shop</Link>
              </div>
           </div>
        </div>
    );
};

export default DetailsPage;