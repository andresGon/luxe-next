import React from 'react';

function ProductCard({ 
  imageSrc,    // URL de la imagen del producto
  name,        // Nombre del producto
  price,       // Precio actual
  oldPrice,    // Segundo precio o precio anterior
  discount,    // Texto para el descuento, por ejemplo "-11%"
  isHot        // Boolean para mostrar la etiqueta "Hot"
}) {
  return (
    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-sm relative overflow-hidden">
      {/* Contenedor de los flags en la parte superior izquierda */}
      <div className="absolute top-2 left-2 flex flex-col gap-1">
        {/* Flag de descuento (si existe) */}
        {discount && (
          <span 
            className="
              bg-[#54D9E1] 
              text-white 
              text-xs 
              font-bold 
              rounded-sm 
              flex 
              items-center 
              justify-center
              w-[44px] 
              h-[21px]
            "
          >
            {discount}
          </span>
        )}
        
        {/* Flag "Hot" (si isHot == true) */}
        {isHot && (
          <span
            className="
              bg-[#FF0505] 
              text-white 
              text-xs 
              font-bold 
              rounded-sm 
              flex 
              items-center 
              justify-center
              w-[44px] 
              h-[21px]
            "
          >
            Hot
          </span>
        )}
      </div>

      {/* Imagen del producto */}
      <div className="w-full h-60 bg-gray-100 flex items-center justify-center">
        <img 
          src={imageSrc} 
          alt={name} 
          className="object-contain h-full"
        />
      </div>

      {/* Sección de texto (nombre y precios) */}
      <div className="p-4">
        {/* Nombre del producto */}
        <h2 className="text-gray-700 text-base font-medium mb-2">
          {name}
        </h2>

        {/* Contenedor de precios */}
        <div className="flex items-center gap-3">
          {/* Precio principal */}
          <span className="text-lg font-semibold text-gray-900">
            ${price?.toFixed(2)}
          </span>

          {/* Segundo precio (tachado) */}
          {oldPrice && (
            <span className="text-gray-500 line-through">
              ${oldPrice?.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
