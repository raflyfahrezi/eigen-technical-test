import React from 'react'

import { Wrapper } from '@/components'

import { sFooter, sFooterText, sFooterContent } from './styles'

const Footer = () => {
  return (
    <footer className={sFooter}>
      <Wrapper>
        <div className={sFooterContent}>
          <p className={sFooterText}>
            Made by Farhan Rafly Fahrezi Saepulloh for EIGEN Technical Test
            (2022)
          </p>
        </div>
      </Wrapper>
    </footer>
  )
}

export default Footer
