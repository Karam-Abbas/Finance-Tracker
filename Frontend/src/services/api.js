import axios from 'axios';

const API_URL = 'http://localhost:3000';

const Instance = axios.create({
    baseURL: API_URL,
    withCredentials: true
});

export const loginUser = async (userData) => {
    const response = await Instance.post('/user/login', userData);
    return response.data;
};

export const registerUser = async (userData) => {
    const response = await Instance.post('/user/register', userData);
    return response.data;
};


export const logoutUser = async () => {
    const response = await Instance.get('/user/logout');
    return response.data;
};