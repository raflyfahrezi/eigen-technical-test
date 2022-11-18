import { VITE_API_KEY } from '@/constant'

export const getFormattedURLWithAPIKey = (url: string) => {
  if (!url.includes('?')) {
    return `${url}?apiKey=${VITE_API_KEY}`
  }

  return `${url}&apiKey=${VITE_API_KEY}`
}
