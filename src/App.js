import { Route , Switch ,Link, Redirect } from 'react-router-dom';

import DetailsPage from "./components/DetailsPage";
import Store from "./components/Store";

//Contexts
import ContextProvider from "./Contexts/ContextProvider";
import CartContextProvider from './Contexts/CartContextProvider';

function App() {
  return (
    <div>
      <ContextProvider>
         <CartContextProvider>
          <Switch>
            <Route path="/products/:id" component={DetailsPage}/>
            <Route path="/products" component={Store}/>
            <Redirect to="/products"/>
          </Switch>
         </CartContextProvider>
      </ContextProvider>
    </div>
  );
}

export default App;
