import moment from 'moment'

import { TNewsSource } from '@/models'

export const getFormattedDate = (date: string) => {
  return moment(date).format('DD MMMM YYYY')
}

export const getFormattedAuthor = (author: string, source: TNewsSource) => {
  if (source.name) {
    return `by ${author} via ${source.name}`
  }

  return `by ${author}`
}
