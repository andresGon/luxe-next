// app/page.js
import dbConnect from '../lib/dbConnect';
import Producto from '../models/Producto';
import ProductCard from '../components/ProductCard';
import Header from '@/components/Header/Header';

export default async function HomePage() {
  // 1) Conectar a la base de datos
  await dbConnect();

  // 2) Obtener la lista de productos
  //    .lean() retorna objetos planos de JavaScript (más eficiente).
  const products = await Producto.find({}).lean();

  return (
    <>
    <Header />
    <main className="p-8 flex flex-col items-center gap-6">
      
      <h1 className="text-2xl font-bold">Ejemplo de Cards (App Router)</h1>

      {/* 3) Renderizar múltiples <ProductCard /> según los datos de la DB */}
      {products.map((prod) => {
        // Opcional: si tu campo 'imagenes' es un array, tomamos la primera como principal.
        const imageSrc = prod.imagenes && prod.imagenes.length > 0
          ? prod.imagenes[0]
          : 'https://via.placeholder.com/300x300'; // fallback si no hay imágenes

        // Construir la etiqueta de descuento, si existe un porcentaje
        const discountText = prod.porcentaje ? `-${prod.porcentaje}%` : null;

        return (
          <ProductCard
            key={prod._id}             // _id de MongoDB como key única
            imageSrc={imageSrc}
            name={prod.nombre}
            price={prod.precio}
            oldPrice={prod.segundoPrecio}
            discount={discountText}
            isHot={prod.masVendido}    // o 'prod.favorito', según tu esquema
          />
        );
      })}
    </main>
    </>
  );
}
