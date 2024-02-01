import { QUERY_KEY } from '@/constants'
import type { GetNASAImageListParams, GetNASAImageListResponse } from '@/types/gallery'
import type { UseQueryOptions } from '@tanstack/react-query'
import { useQuery } from '@tanstack/react-query'
import type { AxiosError } from 'axios'
import { getNASAImageList } from '../apis'

export const useGetNASAImages = (
  { q }: GetNASAImageListParams,
  options?: UseQueryOptions<GetNASAImageListResponse, AxiosError>,
) => {
  return useQuery<GetNASAImageListResponse, AxiosError>([QUERY_KEY.NASA_IMAGE_LIST, q], () => getNASAImageList({ q }), {
    ...options,
    cacheTime: 1000 * 60 * 60 * 12, // 12시간
    staleTime: 1000 * 60 * 60 * 10, // 10시간
    suspense: false,
  })
}
