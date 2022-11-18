import axios from 'axios'

import { AxiosProps } from './types'
import { getFormattedURLWithAPIKey } from './helpers'

export const axiosGet = <T>(url: string, config?: AxiosProps) => {
  return axios.get<T>(getFormattedURLWithAPIKey(url), {
    ...config,
    baseURL: config?.withoutBaseURL ? '' : import.meta.env.VITE_BASE_URL,
  })
}
