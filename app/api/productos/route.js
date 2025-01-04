// app/api/productos/route.js
import dbConnect from '@/lib/dbConnect';
import Producto from '@/models/Producto';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await dbConnect();
    const productos = await Producto.find({});
    return NextResponse.json({ success: true, data: productos }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

export async function POST(request) {
  try {
    await dbConnect();
    // Obtenemos el body desde la request
    const body = await request.json();
    const nuevoProducto = await Producto.create(body);

    return NextResponse.json({ success: true, data: nuevoProducto }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
