import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/categoria">Abrigos</Link></li>
        <li><Link to="/categoria-1">Accesorios</Link></li>
        <li><Link to="/item">Item</Link></li>
        <li><Link to="/detalle">Detalle</Link></li>
      </ul>
    </nav>
  );
}