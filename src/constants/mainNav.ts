import { ROUTING_PATH } from '@/routes/path.constants'

export const MAIN_NAV = [
  {
    path: ROUTING_PATH.main,
    text: '홈',
  },
  {
    path: ROUTING_PATH.news,
    text: '뉴스',
  },
  {
    path: ROUTING_PATH.techWiki,
    text: '테크위키',
  },
  {
    path: ROUTING_PATH.game.intro,
    text: '게임',
  },
  {
    path: ROUTING_PATH.gallery,
    text: '갤러리',
  },
] as const
