import { QUERY_KEY } from '@/constants'
import { getYoutubeNewsList } from '@/services'
import { NewsProps } from '@/types'
import type { UseQueryOptions } from '@tanstack/react-query'
import { useQuery } from '@tanstack/react-query'
import type { AxiosError } from 'axios'

export const useGetNews = (options?: UseQueryOptions<NewsProps, AxiosError>) => {
  return useQuery<NewsProps, AxiosError>([QUERY_KEY.NEWS_LIST], () => getYoutubeNewsList(), {
    ...options,
    cacheTime: 1000 * 60 * 60 * 12, // 12시간
    staleTime: 1000 * 60 * 60 * 10, // 10시간
  })
}
