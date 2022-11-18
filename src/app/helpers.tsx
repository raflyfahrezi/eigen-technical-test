import { createBrowserRouter } from 'react-router-dom'

import { HomeModule } from '@/modules'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeModule />,
  },
])
