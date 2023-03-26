import axios from "axios";

const instance = axios.create({
    baseURL : 'http://127.0.0.1:1337/api/',
    headers: {
        Authorization: 'Bearer ' + process.env.STRAPI_TOKEN,
        "Content-Type": "application/json"
    }
})

export default instance;