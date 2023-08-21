import { Layout } from '@/components'
import GalleryPage from '@/pages/Gallery'
import GameMainPage from '@/pages/Game'
import MainPage from '@/pages/Main'
import NewsPage from '@/pages/News'
import TechWikiPage from '@/pages/Tech-wiki'
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
        path: '/game',
        element: <GameMainPage />,
      },
    ],
  },
])
