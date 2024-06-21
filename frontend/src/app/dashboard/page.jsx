'use client';
import React, { useState, useEffect } from 'react';
import Sidebar from '../components/sidebar';
import { all_products, traer_imagen } from '@/hooks/service_producto';

const Dashboard = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const cargarProductos = async () => {
      const respuesta = await all_products();
      console.log('Productos cargados:', respuesta); // Depuración
      if (respuesta.code === 200 && Array.isArray(respuesta.datos)) {
        setProductos(respuesta.datos);
      } else {
        console.error('La respuesta de all_products no es válida:', respuesta);
        setProductos([]);
      }
    };

    cargarProductos();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6">
<h1 className="text-4xl font-bold mb-4 text-gray-800">Bienvenido</h1>
<h2 className="text-2xl font-bold mt-2 mb-6 text-blue-500">Productos Disponibles:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.isArray(productos) && productos.map((dato) => (
            <div key={dato.id} className="card bg-white shadow-md rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl">
              <img src={traer_imagen(dato.imagen_url)} alt={dato.nombre} className="w-full object-cover h-56" />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{dato.nombre}</h2>
                <p className="text-gray-700 mb-4">{dato.descripcion}</p>
                {dato.precio_unitario && (
                  <p className="text-lg font-bold text-gray-800 mt-2">Precio: <span className="bg-gray-300 rounded-lg px-2">${dato.precio_unitario}</span></p>
                )}
                <p className="text-gray-600">Cantidad: {dato.cantidad}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
