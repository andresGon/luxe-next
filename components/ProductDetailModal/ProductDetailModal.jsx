// components/ProductDetailModal.jsx
import React from 'react';

// Ejemplo de estilos inline (puedes ajustarlo a tu librería de estilos preferida)
const modalOverlayStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 9999,
};

const modalContentStyles = {
  backgroundColor: '#fff',
  padding: '1.5rem',
  borderRadius: '8px',
  maxWidth: '600px',
  width: '100%',
  position: 'relative',
};

export default function ProductDetailModal({ isOpen, product, onClose }) {
  if (!isOpen) return null; // Si no está abierto, no renderiza nada.

  return (
    <div style={modalOverlayStyles} onClick={onClose}>
      <div style={modalContentStyles} onClick={(e) => e.stopPropagation()}>
        {/* Botón de cierre */}
        <button 
          style={{ position: 'absolute', top: 10, right: 10 }} 
          onClick={onClose}
        >
          <img src="/icons/close-icon.svg" alt=""  style={{ width:30}}/>
        </button>
        
        {/* Contenido del producto */}
        {product && (
          <>
            <h2>{product.nombre}</h2>
            <img src={product.imagenes[0]} alt={product.nombre} style={{ maxWidth: '100%', marginBottom: '1rem' }} />
            <p><strong>Precio:</strong> ${product.precio}</p>
            <p><strong>Descripción:</strong> {product.descripcion}</p>
          </>
        )}
      </div>
    </div>
  );
}
