import { render } from '@testing-library/react'

import Wrapper from '../index'

test('Render Wrapper', () => {
  render(
    <Wrapper>
      <div></div>
    </Wrapper>
  )
})
