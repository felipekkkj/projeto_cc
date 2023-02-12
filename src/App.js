import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/navbar/Navbar";
import { Rotas } from "./Rotas";

function App() {
  return (

    <BrowserRouter>
    <Navbar />
    <Rotas />
    <Footer />
  </BrowserRouter>
  
  );
}

export default App;
