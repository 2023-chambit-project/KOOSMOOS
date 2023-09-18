import { TechWikiPostProps, TechWikiSummaryListProps } from '@/types/techWiki'
import axios from 'axios'

export const getTechWikiSummaryList = async () => {
  const res = await axios.get<TechWikiSummaryListProps>('/api/wikis')
  return res.data
}

export const getTechWikiPost = async (id?: string) => {
  const res = await axios.get<TechWikiPostProps>('/api/wiki', { params: { id } })
  return res.data
}
