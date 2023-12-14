import { NewsProps } from '@/types'
import axios from 'axios'

export const getYoutubeNewsList = async () => {
  const res = await axios.get<NewsProps>('https://www.googleapis.com/youtube/v3/search', {
    params: {
      part: 'snippet',
      q: '우주뉴스',
      maxResults: 20,
      key: import.meta.env.VITE_APP_YOUTUBE_KEY,
    },
  })
  return res.data
}
