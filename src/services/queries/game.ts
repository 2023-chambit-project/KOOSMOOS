import type { FlagGame1Response, PostGame1FlagReqBody, PostGame2Response, PostGame2ResultReqBody } from '@/types'
import { useMutation, useQuery, type UseMutationOptions, type UseQueryOptions } from '@tanstack/react-query'
import type { AxiosError, AxiosResponse } from 'axios'
import { getGame1Flags, postGame1Flag, postGame2Answers } from '../apis'

export const usePostGame2Answers = (
  options?: UseMutationOptions<AxiosResponse<PostGame2Response>, AxiosError, PostGame2ResultReqBody['answers']>,
) => {
  return useMutation((answers) => postGame2Answers({ answers }), {
    ...options,
    onError: (error) => {
      throw error
    },
  })
}

export const usePostGame1Flag = (
  options?: UseMutationOptions<AxiosResponse<void>, AxiosError, PostGame1FlagReqBody['flagInfo']>,
) => {
  return useMutation((flagInfo) => postGame1Flag({ flagInfo }), {
    ...options,
    onError: (error) => {
      throw error
    },
  })
}

export const useGetGame1Flags = (options?: UseQueryOptions<FlagGame1Response, AxiosError>) => {
  return useQuery<FlagGame1Response, AxiosError>([], () => getGame1Flags(), {
    ...options,
    cacheTime: 1000 * 60 * 60 * 24, // 파기 시간 => 24시간
    staleTime: 1000 * 60 * 60 * 22, // 유통 기간 => 22시간
  })
}
