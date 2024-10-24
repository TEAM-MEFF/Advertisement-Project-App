import { apiClient } from "./config";


export const apiGetProducts = (filter) =>
    apiClient.get(`/products?filter=${JSON.stringify(filter)}`);

export const apiAddProducts = async (payload) =>
    apiClient.post("/products/", payload);

export const apiGetOneProduct = async (id) =>
    apiClient.get(`products/${id}`);

// export const apiDeleteProduct = async (id) =>
//     apiClient.delete(`products/${id}`);

export const apiDeleteProduct = async (productID) => {
    return await axios.delete(`https://advertisement-project-api.onrender.com/products/${productID}`);
};

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