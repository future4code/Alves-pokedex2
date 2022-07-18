import Header from "./Components/Header/Header";
import {Router} from '../src/Router/Router'
import Cards from "./Components/Cards/Cards";
import DetailsPoke from "./Pages/DetailsPoke/DetailsPoke";

function App() {
  return (
    <div>
      <Router />
      <Cards />
      <DetailsPoke />
     Pokedex
    </div>
  );
}

export default App;
