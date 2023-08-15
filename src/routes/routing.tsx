import { GalleryPage, GamePage, MainPage, NewsPage, TechWikiPage } from '@/pages'

import { Layout } from '@/components'
import { createBrowserRouter } from 'react-router-dom'

export const routers = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/news',
        element: <NewsPage />,
      },
      {
        path: '/tech-wiki',
        element: <TechWikiPage />,
      },
      {
        path: '/gallery',
        element: <GalleryPage />,
      },
      {
        path: '/game/:category',
        element: <GamePage />,
      },
    ],
  },
])
