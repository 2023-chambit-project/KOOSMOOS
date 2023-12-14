import axios from 'axios'

const baseURL = `${import.meta.env.VITE_APP_SERVER_URL}/api`

export const axiosInstance = axios.create({ baseURL })
