import Header from "./Components/Header/Header";
import Router from './Router/Router'
import Cards from "./Components/Cards/Cards";
import DetailsPoke from "./Pages/DetailsPoke/DetailsPoke";
import Pokedex from "./Pages/Pokedex/Pokedex";
import GlobalState from "./Components/Global/GlobalState";

function App() {
  return (
    <GlobalState>
      <Router />
    </GlobalState>
  );
}

export default App;
