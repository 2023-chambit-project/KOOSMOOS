import { TechWikiPostProps, TechWikiSummaryListProps } from '@/types/techWiki'
import { rest } from 'msw'
import { TechWikiPosts, techWikiPostsSummary } from '../data'

export const getWikiList = rest.get('/api/wikis', (_, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json<TechWikiSummaryListProps>({
      posts: techWikiPostsSummary,
    }),
  )
})

export const getWiki = rest.get('/api/wiki', (req, res, ctx) => {
  const id = req.url.searchParams.get('id')
  const target = TechWikiPosts.find((post) => String(post.id) === id)

  if (target === undefined) return res(ctx.status(400), ctx.json({ message: '존재하지 않는 포스팅입니다.' }))
  return res(ctx.status(200), ctx.json<TechWikiPostProps>(target))
})
