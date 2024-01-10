import { TechWikiPostProps, TechWikiSummaryListProps } from '@/types'
import { axiosInstance } from './axios'

export const getTechWikiSummaryList = async () => {
  const res = await axiosInstance.get<TechWikiSummaryListProps>('/tech-wikis')
  return res.data
}

export const getTechWikiPost = async (id?: string) => {
  const res = await axiosInstance.get<TechWikiPostProps>(`/tech-wikis/${id}`)
  return res.data
}
