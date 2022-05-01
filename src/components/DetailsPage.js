import React, { useContext } from 'react';
import { productsContext } from '../Contexts/ContextProvider';

const DetailsPage = (props) => {
    const id = props.match.params.id;
    const data = useContext(productsContext);
    const product = data[id - 1];
    const {image , title , description , category , price} = product;
    return (
        <div>
        <img src={image} />
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <p><span>Category:</span>{category}</p>
            <span>{price} $</span>
        </div>
        </div>
    );
};

export default DetailsPage;