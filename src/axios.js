import axios from "axios"

const client = axios.create({ baseURL: "https://dummyjson.com" })

client.interceptors.response.use(
        (response) => {
                return response.data
        },
        (error) => {
                return Promise.reject(error)
        }
)

export default client
