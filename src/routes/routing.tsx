import { Layout } from '@/components'
import GalleryPage from '@/pages/Gallery'
import GameMainPage from '@/pages/Game'
import Game1Page from '@/pages/Game/Game1'
import Game2Page from '@/pages/Game/Game2'
import MainPage from '@/pages/Main'
import NewsPage from '@/pages/News'
import TechWikiPage from '@/pages/Tech-wiki'
import WikiPostPage from '@/pages/Tech-wiki/WikiPost'
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
        path: '/tech-wiki/:id',
        element: <WikiPostPage />,
      },
      {
        path: '/gallery',
        element: <GalleryPage />,
      },
      {
        path: '/game',
        element: <GameMainPage />,
      },
      {
        path: '/game/1',
        element: <Game1Page />,
      },
      {
        path: '/game/2',
        element: <Game2Page />,
      },
    ],
  },
])
