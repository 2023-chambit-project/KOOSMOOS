import type { GetNASAImageListParams } from '@/types/gallery'
import axios from 'axios'

export const getNASAImageList = async ({ q }: GetNASAImageListParams) => {
  const res = await axios.get('https://images-api.nasa.gov/search', {
    params: { q, media_type: 'image', page_size: 16, page: 1 },
  })

  return res.data
}
