//Contexts
import ContextProvider from "./Contexts/ContextProvider";
import Store from "./components/Store";
function App() {
  return (
    <div>
      <ContextProvider>
         <Store/>
      </ContextProvider>
    </div>
  );
}

export default App;
