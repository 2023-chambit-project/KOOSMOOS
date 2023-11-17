import type { FlagGame1Response, PostGame1FlagReqBody, PostGame2Response, PostGame2ResultReqBody } from '@/types'
import axios from 'axios'

export const postGame2Answers = async (payload: PostGame2ResultReqBody) => {
  return await axios.post<PostGame2Response>('/api/game2', payload)
}

export const getGame1Flags = async () => {
  const res = await axios.get<FlagGame1Response>('/api/games/flags')
  return res.data
}

export const postGame1Flag = async (payload: PostGame1FlagReqBody) => {
  return await axios.post('/api/games/flags', payload)
}
