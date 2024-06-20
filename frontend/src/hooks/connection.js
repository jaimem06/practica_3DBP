const URL = process.env.URL_API;
import axios from 'axios';

// Metodo POST
export const POST = async (resource, data, token = "NONE") => {
    let headers = {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }
    if (token != "NONE") {
        headers.headers["X-Access-Token"] = token;
    }
    return await axios.post(URL + resource, data, headers);
}

// Metodo GET
export const GET = async (resource, token = "NONE") => {
    let headers = {
        headers: {
            "Accept": "application/json",
        }
    }
    if (token !== "NONE") {
        headers.headers["X-Access-Token"] = token;
    }
    return await axios.get(URL + resource, headers);
}

// Método POST_IMG
export const POST_IMG = async (resource, formData, token = "NONE") => {
    let config = {
        headers: {
            "Accept": "application/json",
            // No establecer "Content-Type", axios lo hará automáticamente
        }
    };
    if (token !== "NONE") {
        config.headers["X-Access-Token"] = token;
    }
    console.log('POST_IMG called with resource:', resource, 'and config:', config);
    try {
        return await axios.post(URL + resource, formData, config);
    } catch (error) {
        console.log('Error in POST_IMG:', error); 
        throw error; 
    }
}

// Obtener la URL para archivos estaticos
export const URL_IMAGEN = (imagen_url) => {
    return `${URL}${imagen_url}`;
}
