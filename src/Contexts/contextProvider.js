import React ,{ useState,useEffect } from 'react';

//APi
import { getProducts } from '../services/api';

export const productsContext = React.createContext();

const ContextProvider = (props) => {

    const [products , setProducts] = useState([]);

    useEffect(() => {
    const fetchApi = async () => {
        setProducts(await getProducts())
    }

    fetchApi();

 },[])

 return ( <productsContext.Provider value={products}>
        {props.children}
    </productsContext.Provider>
    );
};

export default ContextProvider;