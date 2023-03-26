import axios from "axios";

const instance = axios.create({
    baseURL : process.env.STRAPI_URL,
    headers: {
        Authorization: 'Bearer ' + process.env.STRAPI_TOKEN,
        "Content-Type": "application/json"
    }
})

export default instance;