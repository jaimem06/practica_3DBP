'use client';
import React, { useEffect, useState } from 'react';
import { all_products, traer_imagen } from '@/hooks/service_producto';
import Sidebar from '../components/sidebar';
import Link from "next/link";

const Productos = () => {
  const [products, setProducts] = useState({ datos: [] });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await all_products();
      setProducts(response);
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">Administracion de Productos</h1>
          <div style={{ margin: "10px" }}>
            <div className="flex">
              <input
                type="text"
                className="w-full max-w-[120px] bg-white pl-2 text-sm font-medium text-black outline-none rounded-l-lg"
                placeholder="Buscar"
                id=""
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
              <input type="button" value="Buscar" className="bg-blue-500 p-1 rounded-tr-lg rounded-br-lg text-white font-medium hover:bg-blue-800 transition-colors" />
              <Link href="/productos/new" className="btn btn-success ml-2 rounded-lg text-white font-medium p-1 hover:bg-green-700 transition-colors">Nuevo Producto</Link>
            </div>
          </div>
          <div className="container-fluid" style={{ maxHeight: '75vh', overflow: 'auto' }}>
            <div className="col-6"></div>
            <table className="table table-bordered" style={{ textAlign: "center", fontSize: "15px" }}>
              <thead>
                <tr>
                  <th>Nro</th>
                  <th>Imagen</th> {/* Nueva columna para la imagen */}
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Fecha Caducidad</th>
                  <th>Estado</th>
                  <th>Cantidad</th>
                  <th>Lote</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {products.datos
                  .filter(dato =>
                    dato.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    dato.precio_unitario.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
                    dato.estado.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    new Date(dato.fecha_caducidad).toLocaleDateString('es-ES').includes(searchTerm)
                  )
                  .map((dato, i) => {
                    console.log(dato.imagen_url); // Imprime en consola el imagen_url de cada producto
                    return (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>
                          <img src={traer_imagen(dato.imagen_url)} alt={dato.nombre} style={{ width: '50px', height: '50px' }} />
                        </td>
                        <td>{dato.nombre}</td>
                        <td>$ {dato.precio_unitario}</td>
                        <td>{new Date(dato.fecha_caducidad).toLocaleDateString('es-ES', {
                          year: 'numeric',
                          month: '2-digit',
                          day: '2-digit'
                        })}</td>
                        <td style={{ textAlign: 'center' }}>
                          <span style={{
                            backgroundColor: dato.estado === 'BUEN_ESTADO' ? '#3ABE7B' :
                              dato.estado === 'CADUCADO' ? '#E83030' :
                                dato.estado === 'POR_CADUCAR' ? '#E2D414' : 'transparent',
                            borderRadius: '20px',
                            color: 'black',
                            padding: '2px 10px',
                            display: 'inline-block'
                          }}>
                            {dato.estado}
                          </span>
                        </td>
                        <td>{dato.cantidad}</td>
                        <td>{dato.nombre_lote}</td>
                        <td>
                          <Link href={"/productos/" + dato.external_id} className="btn btn-info">Modificar</Link>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productos;