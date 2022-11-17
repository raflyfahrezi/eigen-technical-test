import React from 'react'
import { cx } from '@emotion/css'

import { sParagraph } from './styles'
import { TParagraphProps } from './types'

const Paragraph = ({ children, className, ...props }: TParagraphProps) => {
  return (
    <p className={cx(className, sParagraph)} {...props}>
      {children}
    </p>
  )
}

export default Paragraph
