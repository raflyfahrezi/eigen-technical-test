import React from 'react'

import { Head, Footer } from '@/layout'

import { sPageWrapper } from './styles'
import { TPageWrapperProps } from './types'

const PageWrapper = ({ title, children }: TPageWrapperProps) => {
  return (
    <>
      <Head title={title} />
      <div className={sPageWrapper}>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default PageWrapper
