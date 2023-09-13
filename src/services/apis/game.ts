import type { PostGame2Response, PostGame2ResultReqBody } from '@/mocks/apis/game/apis.types'
import axios from 'axios'

export const postGame2Answers = async (payload: PostGame2ResultReqBody) => {
  return await axios.post<PostGame2Response>('/api/game2', payload)
}
