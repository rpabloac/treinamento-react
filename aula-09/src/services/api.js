import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

export async function get(endpoint) {
    const response = await api.get(endpoint);
    return response;
}

export async function post(endpoint, data) {
    const response = await api.post(endpoint, data);
    return response;
}
