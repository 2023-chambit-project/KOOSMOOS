import type { PostGame2Response, PostGame2ResultReqBody } from '@/types'
import { axiosInstance } from './axios'

const gameBaseURL = 'games'

export const postGame2Answers = async (payload: PostGame2ResultReqBody) => {
  return await axiosInstance.post<PostGame2Response>(`/${gameBaseURL}/mbti`, payload)
}
