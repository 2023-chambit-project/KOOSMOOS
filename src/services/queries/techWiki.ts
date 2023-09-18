import { QUERY_KEY } from '@/constants'
import type { TechWikiPostProps, TechWikiSummaryListProps } from '@/types/techWiki'
import type { UseQueryOptions } from '@tanstack/react-query'
import { useQuery } from '@tanstack/react-query'
import type { AxiosError } from 'axios'
import { getTechWikiPost, getTechWikiSummaryList } from '../apis'

export const useGetTechWikiSummaryList = (options?: UseQueryOptions<TechWikiSummaryListProps, AxiosError>) => {
  return useQuery<TechWikiSummaryListProps, AxiosError>([QUERY_KEY.TECHWIKI_LIST], () => getTechWikiSummaryList(), {
    ...options,
    cacheTime: 1000 * 60 * 60 * 24, // 24시간
    staleTime: 1000 * 60 * 60 * 22, // 22시간
  })
}

export const useGetTechWikiPost = (id?: string, options?: UseQueryOptions<TechWikiPostProps, AxiosError>) => {
  return useQuery<TechWikiPostProps, AxiosError>([QUERY_KEY.TECHWIKI_LIST, id], () => getTechWikiPost(id), {
    ...options,
    cacheTime: Infinity,
    staleTime: Infinity,
  })
}
