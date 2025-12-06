import { useEffect, useState } from "react";

export default function Categoria() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("/src/data.json")
      .then(res => res.json())
      .then(data => setProductos(data.filter(p => p.categoria === "abrigos")));
  }, []);

  return (
    <div>
      <h1>Abrigos</h1>

      {productos.map((p) => (
        <p key={p.id}>{p.nombre}</p>
      ))}
    </div>
  );
}

