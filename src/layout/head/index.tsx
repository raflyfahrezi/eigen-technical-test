import React from 'react'
import { Helmet } from 'react-helmet'

import { THeadprops } from './types'

const Head = ({ title }: THeadprops) => {
  const titleTemplate = "%s | Farhan's News"

  return <Helmet title={title} titleTemplate={titleTemplate} />
}

export default Head
