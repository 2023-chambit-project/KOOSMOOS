import { game1Flags } from '@/mocks/data/game'
import type {
  FlagGame1Response,
  FlagProp,
  PostGame1FlagReqBody,
  PostGame2Response,
  PostGame2ResultReqBody,
} from '@/types'
import { rest } from 'msw'

export const getGame1FlagList = rest.get('/api/games/flags', (_, res, ctx) => {
  const todaysMoon = 'waxingCrescent'

  const result = game1Flags.filter((val) => val.moonShape === todaysMoon)[0]
  return res(ctx.status(200), ctx.json<FlagGame1Response>(result))
})

export const saveGame1Flag = rest.post<PostGame1FlagReqBody>('/api/games/flags', (req, res, ctx) => {
  const { flagInfo } = req.body

  const todayMoon = 'waxingCrescent'

  const newFlag: FlagProp = {
    id: -game1Flags.length,
    writer: flagInfo.writer,
    greeting: flagInfo.greeting,
    img_src: 'https://source.unsplash.com/random/?supernova',
    posX: flagInfo.posX,
    posY: flagInfo.posY,
  }
  const flags = game1Flags.filter((val) => val.moonShape == todayMoon)[0]
  flags.flagList.push(newFlag)
  return res(ctx.status(200))
})

export const getGame2Result = rest.post<PostGame2ResultReqBody>('/api/game2', (req, res, ctx) => {
  const { answers } = req.body

  let resultMBTI = ''
  const ansMap = new Map()

  // 요청으로 받은 answers 배열을 연산 - count
  answers.forEach((ans) => {
    ansMap.set(ans, (ansMap.get(ans) || 0) + 1)
  })

  if (ansMap.get('E') > ansMap.get('I')) {
    resultMBTI += 'E'
  } else {
    resultMBTI += 'I'
  }

  if (ansMap.get('N') > ansMap.get('S')) {
    resultMBTI += 'N'
  } else {
    resultMBTI += 'S'
  }

  if (ansMap.get('F') > ansMap.get('T')) {
    resultMBTI += 'F'
  } else {
    resultMBTI += 'T'
  }

  if (ansMap.get('P') > ansMap.get('J')) {
    resultMBTI += 'P'
  } else {
    resultMBTI += 'J'
  }

  return res(
    ctx.status(200),
    ctx.json<PostGame2Response>({ resultImageSrc: `/assets/game/resultPaper/${resultMBTI}.png` }),
  )
})
