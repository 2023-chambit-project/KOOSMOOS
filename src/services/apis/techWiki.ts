import { TechWikiPostProps, TechWikiSummaryListProps } from '@/types'
import { axiosInstance } from './axios'

export const getTechWikiSummaryList = async () => {
  const res = await axiosInstance.get<TechWikiSummaryListProps>('/wiki')
  return res.data
}

export const getTechWikiPost = async (id?: string) => {
  const res = await axiosInstance.get<TechWikiPostProps>(`/wiki/${id}`)
  return res.data
}
