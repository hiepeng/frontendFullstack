import axios from "axios";

const axiosConfig = axios.create({
    baseURL: 'https://backendhiep.herokuapp.com/',
    headers: {
        'Content-Type': 'application/json'
    }})

export default axiosConfig