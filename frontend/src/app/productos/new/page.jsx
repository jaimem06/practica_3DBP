'use client';
import './styles.css';
import { save_product } from '@/hooks/service_producto';
import React from 'react';
import swal from 'sweetalert';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import Sidebar from '@/app/components/sidebar';

export default function NewProduct() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();

    const sendInfo = async (data) => {
        const token = Cookies.get('token');
        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            if (key === 'imagen' && value.length > 0) {
                formData.append(key, value[0]);
            } else if (key === 'fecha_caducidad') {
                formData.append(key, value.split('T')[0]);
            } else {
                formData.append(key, value);
            }
        });

        const info = await save_product(token, formData);
        swal({
            title: info.code === 200 ? "Info" : "Error",
            text: info.msg,
            icon: info.code === 200 ? "success" : "error",
            button: "Aceptar",
            timer: 4000,
            closeOnEsc: true,
        }).then(() => {
            if (info.code === 200) router.push('/productos');
        });
    }

    return (
        <div>
            <Sidebar />
            <section className="container" style={{ marginTop: "20px" }}>
                <header>REGISTRAR NUEVO PRODUCTO</header>
                <form className="form" onSubmit={handleSubmit(sendInfo)}>
                    {['nombre', 'cantidad', 'precio_unitario', 'fecha_caducidad', 'nombre_lote'].map((field) => (
                        <div className="input-box" key={field}>
                            <label>{field.replace('_', ' ').toUpperCase()}:</label>
                            {errors[field] && <span style={{ color: "#E83030", marginLeft: "10px" }}>Este campo es obligatorio</span>}
                            <input
                                {...register(field, { required: true })}
                                placeholder={`Ingrese ${field}`}
                                type={field === 'fecha_caducidad' ? 'date' : field === 'cantidad' || field === 'precio_unitario' ? 'number' : 'text'}
                                step={field === 'cantidad' ? "1" : "0.01"}
                            />
                        </div>
                    ))}
                    <div className="grid w-full max-w-xs items-center gap-1.5">
                        <label>Cargar Imagen:</label>
                        <input {...register('imagen')}
                            className="flex w-full rounded-md border border-blue-100 border-input bg-white text-sm text-gray-800 file:border-0 file:bg-blue-600 file:text-white file:text-sm file:font-medium"
                            type="file" id="picture"
                            accept="image/png, image/jpeg, image/gif"
                        />
                    </div>
                    <button type="submit">Guardar Datos</button>
                </form>
            </section>
        </div>
    );
};