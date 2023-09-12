import { rest } from 'msw'

// 테스트를 위해 임시로 내부에 작성했습니다. --------------------
interface Test {
  test: string
}

const TestList = [
  {
    test: '테스트입니다.',
  },
]
// ----------------------------------------------------

/**
 * 게시물 목록 조회
 */
export const getTest = rest.get('/api/test', (_, res, ctx) => {
  return res(ctx.status(200), ctx.json<Test[]>(TestList))
})
