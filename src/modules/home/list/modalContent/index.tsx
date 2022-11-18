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
      <img src={urlToImage} className={sModalContentImage} alt='image news' />
      <Paragraph className={sModalAuthor}>
        {author && `by ${getFormattedAuthor(author, source)}`} at{' '}
        {getFormattedDate(publishedAt)}
      </Paragraph>
      <Paragraph>{description}</Paragraph>
    </div>
  )
}

export default ModalContent
