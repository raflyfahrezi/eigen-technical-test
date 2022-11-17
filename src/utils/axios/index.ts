import axios from 'axios'

import { AxiosProps } from './types'

export const axiosGet = (url: string, config?: AxiosProps) => {
  return axios.get(`${url}?apiKey=${process.env.REACT_APP_API_KEY}`, {
    ...config,
    baseURL: config?.withoutBaseURL ? '' : process.env.REACT_APP_BASE_URL,
  })
}
