import { apiClient } from "./config";

export const apiSignup = async (payload) => { //payload is an object containing all the details entered
    return await apiClient.post("/users/register", payload);
    // first parameter of POST = 'path', second parameter = 'payload'...
}

export const apiLogin = async (payload) => {
    return apiClient.post("/users/login", payload);
}