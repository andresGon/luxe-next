'use client'; 
// Importante: con esta directiva indicamos que este componente se renderiza en el cliente.

import React, { useState } from 'react';
import ProductCard from '../ProductCard.jsx';
import ProductDetailModal from '../ProductDetailModal/ProductDetailModal.jsx'; // El modal
import Image from 'next/image'; // Opcional si quieres usar Next Image

export default function ProductListClient({ products }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  return (
    <>
      {products.map((prod) => {
        // Determinar la imagen principal
        const imageSrc = prod.imagenes?.length > 0
          ? prod.imagenes[0]
          : 'https://via.placeholder.com/300x300';

        // Construir la etiqueta de descuento
        const discountText = prod.porcentaje ? `-${prod.porcentaje}%` : null;

        return (
          <div key={prod._id} onClick={() => handleOpenModal(prod)}>
            <ProductCard
              imageSrc={imageSrc}
              name={prod.nombre}
              price={prod.precio}
              oldPrice={prod.segundoPrecio}
              discount={discountText}
              isHot={prod.masVendido}
            />
          </div>
        );
      })}

      {/* Modal de detalle de producto */}
      <ProductDetailModal
        isOpen={isModalOpen}
        product={selectedProduct}
        onClose={handleCloseModal}
      />
    </>
  );
}
