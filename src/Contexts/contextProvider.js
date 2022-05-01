import React ,{ useState,useEffect } from 'react';
import { getProducts } from '../services/api';

const productsContext = React.createContext();

const contextProvider = (props) => {
const [products , setProducts] = useState([]);


 useEffect(() => {
 const fetchApi = async () => {
     setProducts(await getProducts())
 }

 fetchApi();

 },[])

 return <productsContext.Provider value={products}>
        {props.children}
    </productsContext.Provider>
};

export default contextProvider;