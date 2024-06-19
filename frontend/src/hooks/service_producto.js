import Cookies from 'js-cookie';
import { GET, POST } from './connection';

export async function all_products() {
    let datos = null;

    try {
        const token = await Cookies.get('token');
        datos = await GET('producto', token);
    } catch (error) {
        console.log(error.response.data);
        return { "code": 500 }
    }
    return datos.data;
    // TODO agarrar errores
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