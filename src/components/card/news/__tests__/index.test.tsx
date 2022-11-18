import { render } from '@testing-library/react'

import NewsCard from '..'

test('Render NewsCard', () => {
  render(
    <NewsCard
      title='Test'
      description='Test'
      url='https://www.google.com'
      onClick={() => {}}
      publishedAt='2021-01-01T00:00:00Z'
      source={{ name: 'Test' }}
    />
  )
})
