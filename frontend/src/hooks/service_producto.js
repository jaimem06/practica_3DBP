import Cookies from 'js-cookie';
import { GET, POST, POST_IMG, URL_IMAGEN } from './connection';

export async function all_products() {
    let datos = null;
    try {
        const token = Cookies.get('token');
        datos = await GET('producto', token);
    } catch (error) {
        console.log(error.response.data);
        return { "code": 500 }
    }
    return datos.data;
}

export async function get_producto(token, external) {
    let datos = null;
    try {
        datos = await GET('producto/' + external, token);
    } catch (error) {
        console.log(error.response.data);
        return { "code": 500 }
    }
    return datos.data;
}

export async function modify_producto(token, external, data) {
    if (!external) {
        console.error('External ID is undefined or null');
        return { "code": 500 };
    }

    let datos = null;
    try {
        datos = await POST('producto/modificar/' + external, data, token);
    } catch (error) {
        console.log(error.response.data);
        return { "code": 500 }
    }
    return datos.data;
}

export async function save_product(token, formData) {
    console.log('save_product called with data:', formData);

    console.log('FormData entries:', Array.from(formData.entries())); // To verify formData content

    try {
        const response = await POST_IMG('productoimg/registrar', formData, token);
        if (response.data && response.data.code === 200) {
            return response.data;
        } else {
            console.log('Error en la respuesta del servidor', response.data);
            return { "code": response.data.code, "msg": response.data.msg };
        }
    } catch (error) {
        console.log('Error in save_product:', error);
        if (error.response && error.response.data) {
            console.log(error.response.data.msg);
            return { "code": error.response.status, "msg": error.response.data.msg };
        } else {
            console.log('Error desconocido', error);
            return { "code": 500, "msg": "Error desconocido" };
        }
    }
}

export function traer_imagen(imagen_url) {
    // Construcción de la URL de la imagen
    const url = URL_IMAGEN(imagen_url); // Suponiendo que URL_IMAGEN es una función o una constante que ayuda a construir la URL final
    console.log(`URL de la imagen construida: ${url}`); // Agregamos el console.log aquí
    return url;
}