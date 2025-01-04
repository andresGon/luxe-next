// app/page.js
import dbConnect from '@/lib/dbConnect';
import Producto from '@/models/Producto';

// Un Server Component para renderizar la lista de productos
export default async function HomePage() {
  // 1. Conectar y obtener los productos
  await dbConnect();
  const productos = await Producto.find({}).lean();

  // 2. Renderizar la interfaz
  return (
    <main>
      <h1>Lista de Productos</h1>
      {productos.length > 0 ? (
        <ul>
          {productos.map((prod) => (
            <li key={prod._id}>
              <strong>{prod.nombre}</strong> - {prod.descripcion} (Precio: {prod.precio})
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay productos disponibles.</p>
      )}
    </main>
  );
}
