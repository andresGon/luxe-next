// models/Producto.js
import mongoose from 'mongoose';

const productoSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true, 
      trim: false,
    },
    descripcion: {
      type: String,
      required: true,
      trim: false,
    },
    imagenes: {
      type: [String],
      validate: {
        validator: function (v) {
          return Array.isArray(v) && v.length > 0; // Al menos una imagen
        },
        message: 'Debe proporcionar al menos una imagen.',
      },
    },
    precio: {
      type: Number,
      required: true,
      min: 0,
    },
    segundoPrecio: {
      type: Number,
      default: null,
      min: 0,
    },
    porcentaje: {
      type: Number,
      min: 0,
      max: 100,
    },
    categoria: {
      type: String,
      required: true,
      trim: false,
    },
    favorito: {
      type: Boolean,
      default: false,
    },
    masVendido: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // createdAt y updatedAt
  }
);

// Evitar recompilar el modelo en desarrollo
export default mongoose.models.Producto || mongoose.model('Producto', productoSchema);
