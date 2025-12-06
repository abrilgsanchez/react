import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Item() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    if (id) {
      fetch("/src/data.json")
        .then(res => res.json())
        .then(data => setProducto(data.find(p => p.id === Number(id))));
    }
  }, [id]);

  return (
    <div>
      <h1>Item</h1>
      {id ? (
        producto ? <p>{producto.nombre}</p> : <p>Cargando...</p>
      ) : (
        
    <p>No seleccionaste ningún producto todavía.</p>

      )}
    </div>
  );
}