import axios from 'axios'

const baseURL = `${import.meta.env.VITE_APP_API_SERVER_URL}`

export const axiosInstance = () => axios.create({ baseURL })
