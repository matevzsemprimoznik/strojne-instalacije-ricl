import axios from "axios";

export const strapiInstance = axios.create({
    baseURL : process.env.STRAPI_URL,
    headers: {
        Authorization: 'Bearer ' + process.env.STRAPI_TOKEN,
        "Content-Type": "application/json"
    }
})

export const apiInstance = axios.create({
    baseURL : process.env.NEXT_PUBLIC_API_URL,
    headers: {
        Authorization: 'Bearer ' + process.env.STRAPI_TOKEN,
        "Content-Type": "application/json"
    }
})
