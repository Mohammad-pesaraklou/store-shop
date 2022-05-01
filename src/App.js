//Contexts
import ContextProvider from "./Contexts/ContextProvider";
import Store from "./components/Store";
import { Route , Switch ,Link, Redirect } from 'react-router-dom';
import DetailsPage from "./components/DetailsPage";
function App() {
  return (
    <div>
      <ContextProvider>
    <Switch>
      <Route path="/products/:id" component={DetailsPage}/>
      <Route path="/products" component={Store}/>
      <Redirect to="/products"/>
    </Switch>
      </ContextProvider>
    </div>
  );
}

export default App;
