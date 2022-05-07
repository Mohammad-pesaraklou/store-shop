import { Route , Routes , Navigate } from 'react-router-dom';

import DetailsPage from "./components/DetailsPage";
import Store from "./components/Store";
import Navbar from './components/Navbar';
import ShopCart from './components/ShopCart';
//Contexts
import ContextProvider from "./Contexts/ContextProvider";
import CartContextProvider from './Contexts/CartContextProvider';

function App() {
  return (
    <div>
      <ContextProvider>
         <CartContextProvider>
           <Navbar/>
          <Routes>
            <Route path="/products/:id" element={<DetailsPage />}/>
            <Route path="/cart" element={<ShopCart />}/>
            <Route path="/products" element={<Store />}/>
            <Route path='/*' element={<Navigate to='/products'/>}/>
          </Routes>
         </CartContextProvider>
      </ContextProvider>
    </div>
  );
}

export default App;
