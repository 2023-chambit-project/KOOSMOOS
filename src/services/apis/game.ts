import type { FlagGame1Response, PostGame1FlagReqBody, PostGame2Response, PostGame2ResultReqBody } from '@/types'
import axios from 'axios'

import { axiosInstance } from './axios'

const gameBaseURL = 'games'

export const postGame2Answers = async (payload: PostGame2ResultReqBody) => {
  return await axiosInstance.post<PostGame2Response>(`/${gameBaseURL}/mbti`, payload)
}

export const getGame1Flags = async () => {
  const res = await axios.get<FlagGame1Response>('/api/games/flags')
  return res.data
}

export const postGame1Flag = async (payload: PostGame1FlagReqBody) => {
  return await axios.post('/api/games/flags', payload)
}
