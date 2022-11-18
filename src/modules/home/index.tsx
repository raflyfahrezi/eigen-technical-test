import React from 'react'

import { Wrapper } from '@/components'
import { PageWrapper } from '@/layout'
import { Paragraph } from '@/typography'

import Hero from './hero'
import List from './list'

const HomeModules = () => {
  return (
    <PageWrapper title='Home'>
      <div>
        <Hero />
        <Wrapper>
          <List />
        </Wrapper>
      </div>
    </PageWrapper>
  )
}

export default HomeModules
