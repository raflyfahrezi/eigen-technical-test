export const getFormattedURLWithAPIKey = (url: string) => {
  if (!url.includes('?')) {
    return `${url}?apiKey=${import.meta.env.VITE_API_KEY}`
  }

  return `${url}&apiKey=${import.meta.env.VITE_API_KEY}`
}
