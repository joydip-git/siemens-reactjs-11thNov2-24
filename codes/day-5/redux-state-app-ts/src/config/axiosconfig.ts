import Axios from "axios";
const axiosInstance = Axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com/todos',
    timeout: 4000,
    timeoutErrorMessage: 'request timed out'
})
export default axiosInstance