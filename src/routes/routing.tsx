import Layout from '@/components/Layout'
import GalleryPage from '@/pages/Gallery'
import GamePage from '@/pages/Game'
import MainPage from '@/pages/Main'
import NewsPage from '@/pages/News'
import TechwikiPage from '@/pages/Tech-wiki'
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
        element: <TechwikiPage />,
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
