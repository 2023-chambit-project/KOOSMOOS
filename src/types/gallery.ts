export interface GetNASAImageListParams {
  q: string
}

export interface GetNASAImageListResponse {
  collection: {
    items: NASAImageCoreProps[]
  }
}

export interface NASAImageCoreProps {
  data: {
    title: string
  }[]
  links: {
    href: string
  }[]
}
