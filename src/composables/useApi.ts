import axios, { type AxiosInstance } from 'axios'

let apiInstance: AxiosInstance | null = null

export function useApi() {
  if (!apiInstance) {
    apiInstance = axios.create({
      baseURL: import.meta.env.VITE_API_URL || ''
    })

    apiInstance.interceptors.request.use(config => {
      const token = localStorage.getItem('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    })
  }

  return { api: apiInstance }
}
