import { QUERY_KEY } from '@/constants'
import type { FlagGame1Response, PostGame1FlagReqBody, PostGame2Response, PostGame2ResultReqBody } from '@/types'
import {
  useMutation,
  useQuery,
  useQueryClient,
  type UseMutationOptions,
  type UseQueryOptions,
} from '@tanstack/react-query'
import type { AxiosError, AxiosResponse } from 'axios'
import { getGame1Flags, postGame1Flag, postGame2Answers } from '../apis'
import LOGO_IMAGE from '/assets/logo/logo_512x105.svg'

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
  const queryClient = useQueryClient()
  return useMutation((flagInfo) => postGame1Flag({ flagInfo }), {
    ...options,
    onError: (error) => {
      window.alert('죄송합니다.\n 깃발 설치과정에서 문제가 발생했습니다. 😢')
      throw error
    },
    onSuccess(_, variables) {
      queryClient.setQueryData([QUERY_KEY.GAME1_LIST], (old: FlagGame1Response | undefined) => {
        if (!old) {
          return old
        }
        old.flagList.push({
          id: Math.floor(-1 * (variables.posX + variables.posY + Math.random() * 1000 + 1)),
          writer: variables.writer,
          greeting: variables.greeting,
          img_src: LOGO_IMAGE,
          posX: variables.posX,
          posY: variables.posY,
        })
        return old
      })
      window.alert('축하합니다.\n 깃발이 달에 무사히 도착하여 설처되었습니다. 🎉')
    },
  })
}

export const useGetGame1Flags = (options?: UseQueryOptions<FlagGame1Response, AxiosError>) => {
  return useQuery<FlagGame1Response, AxiosError>([QUERY_KEY.GAME1_LIST], () => getGame1Flags(), {
    ...options,
    cacheTime: 1000 * 60 * 60, // 파기 시간 => 1시간
    staleTime: 1000 * 60 * 30, // 유통 기간 => 30분
  })
}
