import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/todos',
    timeout: 5000,
    timeoutErrorMessage: 'request timed out'
})

// axiosInstance.interceptors.request.use(

// )

export default axiosInstance