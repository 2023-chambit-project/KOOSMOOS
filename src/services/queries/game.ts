import type { PostGame2Response, PostGame2ResultReqBody } from '@/types'
import { useMutation, type UseMutationOptions } from '@tanstack/react-query'
import type { AxiosError, AxiosResponse } from 'axios'
import { postGame2Answers } from '../apis'

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
