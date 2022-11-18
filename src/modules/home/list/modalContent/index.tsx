import React from 'react'

import { Paragraph } from '@/typography'

import { TModalContent } from './types'
import { getFormattedAuthor, getFormattedDate } from './helpers'
import { sModalAuthor, sModalContent, sModalContentImage } from './styles'

const ModalContent = ({
  author,
  source,
  urlToImage,
  description,
  publishedAt,
}: TModalContent) => {
  return (
    <div className={sModalContent}>
      <img
        src={urlToImage ?? '/image-placeholder.jpg'}
        className={sModalContentImage}
        alt='image news'
        onError={(e) => {
          e.currentTarget.src = '/image-placeholder.jpg'
        }}
      />
      <Paragraph className={sModalAuthor}>
        {author && `${getFormattedAuthor(author, source)}`} at{' '}
        {getFormattedDate(publishedAt)}
      </Paragraph>
      <Paragraph>{description ?? 'No description is provided.'}</Paragraph>
    </div>
  )
}

export default ModalContent
