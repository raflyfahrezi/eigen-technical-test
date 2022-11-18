import { render } from '@testing-library/react'

import PageWrapper from '../index'

test('Render PageWrapper', () => {
  render(
    <PageWrapper title='Test'>
      <div></div>
    </PageWrapper>
  )
})
