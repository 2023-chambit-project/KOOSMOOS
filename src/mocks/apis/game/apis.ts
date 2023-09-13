import type { PostGame2Response, PostGame2ResultReqBody } from '@/types'
import { rest } from 'msw'

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
