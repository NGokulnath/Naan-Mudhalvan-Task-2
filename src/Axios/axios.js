import axios from "axios"
const instance = axios.create({
    // baseURL:"http://localhost:8000/api"
    baseURL:"https://elakkiya-server.onrender.com/api"
})
export default instance
