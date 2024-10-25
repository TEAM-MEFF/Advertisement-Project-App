import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;
// taking token from the localStorage to be stored here...

const token = localStorage.getItem("token") // accessing token from localStorage...

if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
} // putting token in/on headers to be used for whatever...

export const apiClient = axios.create({
    baseURL: baseURL,
    // headers: {
    //     Authorization: `Bearer ${token}` // Bearer is sometimes refered to as Basic...
    // }
})
