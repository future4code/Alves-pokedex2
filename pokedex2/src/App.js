import Header from "./Components/Header/Header";
import Router from './Router/Router'
import Cards from "./Components/Cards/Cards";
import DetailsPoke from "./Pages/DetailsPoke/DetailsPoke";
import Pokedex from "./Pages/Pokedex/Pokedex";
import GlobalState from "./Components/Global/GlobalState";
import {ContainerApp} from './AppStyled'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (

      <GlobalState>
         <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
        <Router />
      </GlobalState>

  );
}

export default App;
