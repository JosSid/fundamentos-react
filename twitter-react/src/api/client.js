import axios from 'axios';
//Desde el cliente atacamos a la url de la base de datos para comunicarnos con ella
const client = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL
});

client.interceptors.response.use(response => response.data)

export default client;