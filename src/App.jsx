import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Categoria from "./pages/Categoria";
import Categoria1 from "./pages/Categoria1";
import Item from "./pages/Item";
import Detalle from "./pages/Detalle";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categoria" element={<Categoria />} />
        <Route path="/categoria-1" element={<Categoria1 />} />
        <Route path="/item" element={<Item />} />
        <Route path="/detalle" element={<Detalle />} />
        <Route path="/item/:id" element={<Item />} />
      </Routes>
    </div>
  );
}

export default App;