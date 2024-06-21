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

export async function modify_producto(external_id, formData) {
    let datos = null;
    try {
        const token = Cookies.get('token');
        datos = await POST_IMG(`producto/modificar/${external_id}`, formData, token);
    } catch (error) {
        console.error('Error modificando producto:', error);
    }
    return datos;
}

    export async function save_product(token, formData) {
        console.log('save_product called with data:', formData);

        console.log('FormData entries:', Array.from(formData.entries()));

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
        const url = URL_IMAGEN(imagen_url); 
        console.log(`URL de la imagen construida: ${url}`); 
        return url;
    }