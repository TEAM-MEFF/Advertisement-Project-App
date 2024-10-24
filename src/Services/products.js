import { apiClient } from "./config";


export const apiGetProducts = () =>
    apiClient.get("/products");

export const apiAddProducts = async (payload) =>
    apiClient.post("/products/", payload);


export const apiGetOneProduct = async (id) =>
    apiClient.get(`products/${id}`);

export const apiDeleteProduct = async (id) =>
    apiClient.delete(`products/${id}`);

// export const apiGetOneProduct = async (slug) => {
//     return apiClient.get(`products/${slug}`);
// }

// export const apiGetOneProduct = async () => {
//     return apiClient.get('/products/671592d12a8c857f8aafe4d4');
// }



// DEFAULT...

// export const apiGetProducts = async() =>
// apiClient.get("/products");

// export const apiGetOneProduct = async(slug) => {
//     return apiClient.get(`products/${slug}`);
// }

// export const apiAddProducts = async(payload) =>
//     apiClient.post("/products", payload);