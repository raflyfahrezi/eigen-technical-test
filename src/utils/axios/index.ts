import axios from 'axios'

import { VITE_BASE_URL } from '@/constant'

import { AxiosProps } from './types'
import { getFormattedURLWithAPIKey } from './helpers'

export const axiosGet = <T>(url: string, config?: AxiosProps) => {
  return axios.get<T>(getFormattedURLWithAPIKey(url), {
    ...config,
    baseURL: config?.withoutBaseURL ? '' : VITE_BASE_URL,
  })
}
