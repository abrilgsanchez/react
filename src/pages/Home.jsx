import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("/src/data.json")
      .then(res => res.json())
      .then(data => setProductos(data));
  }, []);

  return (
    <div>
      <h1>Productos</h1>

      {productos.map((p) => (
        <p key={p.id}>
          <Link to={`/item/${p.id}`}>{p.nombre}</Link>
        </p>
      ))}
    </div>
  );
}
