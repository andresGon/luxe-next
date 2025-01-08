// app/page.js
import dbConnect from '../lib/dbConnect';
import Producto from '../models/Producto';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

// Importa el componente cliente
import ProductListClient from '../components/ProductListClient/ProductListClient.jsx';

export default async function HomePage() {
  // Conectar a la base de datos
  await dbConnect();

  // Obtener la lista de productos
  //const products = await Producto.find({}).lean();


  //Opción 2: con JSON.parse(JSON.stringify())
   let products = await Producto.find({});
   products = JSON.parse(JSON.stringify(products));

  return (
    <>
      <Header />
      <main>
        {/* Pasamos la data como prop al componente cliente */}
        <ProductListClient products={products} />
      </main>
      <Footer />
    </>
  );
}
