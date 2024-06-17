import axios from 'axios';


const getProducts = async () => {
 const response = await axios.get('https://fakestoreapi.com/products')
 return response.data  
}


export { getProducts };