import axios from "axios"

const axiosInstance = axios.create({ baseURL: "https://dummyjson.com" })

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default axiosInstance
