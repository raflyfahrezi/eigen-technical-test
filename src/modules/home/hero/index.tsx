import React from 'react'
import { cx } from '@emotion/css'

import { Wrapper } from '@/components'
import { Paragraph } from '@/typography'

import {
  sHero,
  sHeroTitle,
  sHeroImage,
  sHeroContent,
  sHeroContentBox,
  sHeroContentImageBox,
} from './styles'

const Hero = () => {
  return (
    <div className={sHero}>
      <Wrapper>
        <div className={sHeroContent}>
          <div className={sHeroContentBox}>
            <h1 className={sHeroTitle}>Let's find out what happening today!</h1>
            <Paragraph>
              The most trusted source for news and information about Indonesia
            </Paragraph>
          </div>
          <div className={cx(sHeroContentBox, sHeroContentImageBox)}>
            <img src='/people.png' className={sHeroImage} alt='' />
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default Hero
