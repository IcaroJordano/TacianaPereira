import { NavBar } from "./layout/Navbar"
import HomePage from "./pages/HomePage"
import { BrowserRouter as Router} from "react-router-dom";
import { Rotas } from "./pages/Rotas";
import { VerPedido } from "./layout/VerPedido";

function App() {

  return (
    <>
    {/* <Router> */}
        <VerPedido/>
        <NavBar/>
        <Rotas/>
    {/* </Router> */}

    </>
  )
}

export default App
