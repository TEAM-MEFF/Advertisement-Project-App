import { apiClient } from "./config";


export const apiGetProducts = () =>
    apiClient.get("/products");

// export const apiGetOneProduct = async (slug) => {
//     return apiClient.get(`products/${slug}`);
// }
export const apiGetOneProduct = async () => {
    return apiClient.get("/products");
}

export const apiAddProducts = async (payload) =>
    apiClient.post("/products", payload);


// DEFAULT...

// export const apiGetProducts = async() =>
// apiClient.get("/products");

// export const apiGetOneProduct = async(slug) => {
//     return apiClient.get(`products/${slug}`);
// }

// export const apiAddProducts = async(payload) =>
//     apiClient.post("/products", payload);