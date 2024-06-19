'use client';
import './styles.css';
import { save_product, estado_civil } from '@/hooks/service_producto';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import Sidebar from '@/app/components/sidebar';

// Funcion para traer el enum de estado civil
export default function NewPerson() {
    const { register, handleSubmit } = useForm();
    const router = useRouter();


    // Funcion para guardar un censado
    const sendInfo = async (data) => {
        let token = Cookies.get('token');
        const info = await save_person_census(token, data);
        if (info.code == '200') {
            console.log(info);
            swal({
                title: "Info",
                text: info.datos.tag,
                icon: "success",
                button: "Aceptar",
                timer: 4000,
                closeOnEsc: true,
            });
            router.push('/person')
            router.refresh();
        } else {
            swal({
                title: "Error",
                text: info.datos.error,
                icon: "error",
                button: "Aceptar",
                timer: 4000,
                closeOnEsc: true,
            });
            console.log(info);
            console.log("NO");
        }
    }
    const onSubmit = data => sendInfo(data);

    return (
        <div>
            <Sidebar />
            <section className="container" style={{ marginTop: "20px" }}>
                <header>REGISTRAR NUEVO PRODUCTO</header>
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-box">
                        <label>Nombre Producto:</label>
                        <input {...register('nombre')} required placeholder="Ingrese el nombre del producto" type="text" />
                    </div>
                    <div className="input-box">
                        <label>Cantidad:</label>
                        <input {...register('cantidad')} required placeholder="Ingresa la cantidad de productos" type="number" />
                    </div>
                    <div className="column">
                        <div className="input-box">
                            <label>Fecha de Caducidad:</label>
                            <input {...register('fecha_caducidad')} required placeholder="Fecha de nacimiento" type="date" />
                        </div>
                    </div>
                    <div className="input-box">
                        <label>Nombre del Lote:</label>
                        <input {...register('nombre_lote')} required placeholder="Ingrese el nombre del lote" type="text" />
                    </div>
                    <div class="grid w-full max-w-xs items-center gap-1.5">
                        <label>Cargar Imagen:</label>
                        <input
                            class="flex w-full rounded-md border border-blue-400 border-input bg-white text-sm text-gray-600 file:border-0 file:bg-blue-600 file:text-white file:text-sm file:font-medium"
                            type="file"
                            id="picture"
                        />
                    </div>

                    <button type="submit">Guardar Datos</button>
                </form>
            </section>
        </div>
    );
};