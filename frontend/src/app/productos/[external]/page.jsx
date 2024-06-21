'use client';
import './styles.css';
import { modify_producto, get_producto } from '@/hooks/service_producto';
import React, { useEffect } from 'react';
import swal from 'sweetalert';
import Sidebar from '@/app/components/sidebar';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

export default function ModificarProducto(params) {
    const { register, handleSubmit, setValue } = useForm();
    const router = useRouter();

    const fetchProductoData = async () => {
        const token = Cookies.get('token');
        const response = await get_producto(token, params.params.external);
        const data = response.datos;
        setValue('nombre', data.nombre);
        const formattedDate = new Date(data.fecha_caducidad).toISOString().split('T')[0];
        setValue('fecha_caducidad', formattedDate);
        setValue('cantidad', data.cantidad);
        setValue('precio_unitario', data.precio_unitario);
        setValue('nombre_lote', data.nombre_lote);
    };

    useEffect(() => {
        fetchProductoData();
    }, []);

const sendInfo = async (data) => {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
        if (key === 'imagen' && data[key].length > 0) {
            formData.append(key, data[key][0]);
        } else {
            formData.append(key, data[key]);
        }
    });

    let token = Cookies.get('token');
    try {
        const response = await modify_producto(params.params.external, formData, token);
        // Asumiendo que modify_producto ya procesa la respuesta y devuelve un objeto JavaScript
        if (response && response.status === 200) {
            // Directamente accediendo a las propiedades del objeto sin llamar a .json()
            swal({
                title: "Éxito",
                text: response.msg || "Producto modificado con éxito.",
                icon: "success",
                button: "Aceptar",
                timer: 4000,
                closeOnEsc: true,
            });
            router.push('/productos');
        } else {
            // Manejo de error basado en la respuesta ya procesada
            throw new Error(response.msg || "Error desconocido al modificar el producto.");
        }
    } catch (error) {
        swal({
            title: "Error",
            text: error.message || "Error al modificar el producto. Intente nuevamente.",
            icon: "error",
            button: "Aceptar",
            timer: 4000,
            closeOnEsc: true,
        });
    }
};
    const onSubmit = data => sendInfo(data);

    return (
        <div>
            <Sidebar />
            <section className="container">
                <header>Modificar Producto</header>
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-box">
                        <label>Nombre:</label>
                        <input {...register('nombre')} required placeholder="Nombre del producto" type="text" />
                    </div>
                    <div className="input-box">
                        <label>Cantidad:</label>
                        <input {...register('cantidad')} required placeholder="Cantidad" type="number" />
                    </div>
                    <div className="input-box">
                        <label>Precio Unitario:</label>
                        <input {...register('precio_unitario')} required placeholder="Precio Unitario" type="number" step="0.01" />
                    </div>
                    <div className="input-box">
                        <label>Fecha de Caducidad:</label>
                        <input {...register('fecha_caducidad')} required placeholder="Fecha de Caducidad" type="date" />
                    </div>
                    <div className="input-box">
                        <label>Nombre del Lote:</label>
                        <input {...register('nombre_lote')} required placeholder="Nombre del Lote" type="text" />
                    </div>
                    <div className="grid w-full max-w-xs items-center gap-1.5">
                        <label>Cargar Imagen:</label>
                        <input {...register('imagen')}
                            className="flex w-full rounded-md border border-blue-100 border-input bg-white text-sm text-gray-800 file:border-0 file:bg-blue-600 file:text-white file:text-sm file:font-medium"
                            type="file" id="picture"
                            accept="image/png, image/jpeg, image/gif"
                        />
                    </div>
                    <button type="submit">MODIFICAR</button>
                </form>
            </section>
        </div>
    );
}
