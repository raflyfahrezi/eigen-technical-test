import React from 'react'

import { sWrapper } from './styles'
import { TWrapperProps } from './types'

const Wrapper = ({ children }: TWrapperProps) => {
  return <div className={sWrapper}>{children}</div>
}

export default Wrapper
