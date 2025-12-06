import { useEffect, useState } from "react";

export default function Categoria1() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("/src/data.json")
      .then(res => res.json())
      .then(data => setProductos(data.filter(p => p.categoria === "accesorios")));
  }, []);

  return (
    <div>
      <h1>Accesorios</h1>

      {productos.map((p) => (
        <p key={p.id}>{p.nombre}</p>
      ))}
    </div>
  );
}
