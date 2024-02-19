import { Layout } from '@/components'
import GalleryPage from '@/pages/Gallery'
import GameMainPage from '@/pages/Game'
import Game1Page from '@/pages/Game/Game1'
import Game2Page from '@/pages/Game/Game2'
import MainPage from '@/pages/Main'
import NewsPage from '@/pages/News'
import NotFoundPage from '@/pages/Not-found'
import TechWikiPage from '@/pages/Tech-wiki'
import WikiPostPage from '@/pages/Tech-wiki/WikiPost'
import { createBrowserRouter } from 'react-router-dom'
import { ROUTING_PATH } from './path.constants'

export const routers = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      {
        path: ROUTING_PATH.main,
        element: <MainPage />,
      },
      {
        path: ROUTING_PATH.news,
        element: <NewsPage />,
      },
      {
        path: ROUTING_PATH.techWiki,
        element: <TechWikiPage />,
      },
      {
        path: `${ROUTING_PATH.techWiki}/:id`,
        element: <WikiPostPage />,
      },
      {
        path: ROUTING_PATH.gallery,
        element: <GalleryPage />,
      },
      {
        path: ROUTING_PATH.game.intro,
        element: <GameMainPage />,
      },
      {
        path: ROUTING_PATH.game.launcher,
        element: <Game1Page />,
      },
      {
        path: ROUTING_PATH.game.mbti,
        element: <Game2Page />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
])
