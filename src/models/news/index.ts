export type TNewsResponse = {
  status: string
  totalResults: number
  articles: TNews[]
}

export type TNews = {
  source: TNewsSource
  author?: string
  title: string
  description?: string
  url: string
  urlToImage?: string
  publishedAt: string
  content?: string
}

export type TNewsSource = {
  id?: string
  name: string
}
