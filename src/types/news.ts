export interface NewsProps {
  kind: 'youtube#searchListResponse'
  nextPageToken: string
  prevPageToken: string
  regionCode: string
  pageInfo: {
    totalResults: number
    resultsPerPage: number
  }
  items: NewsItemProps[]
}

export interface NewsItemProps {
  etag: string
  kind: 'youtube#searchResult'
  id: {
    kind: string
    videoId: string
    channelId: string
    playlistId: string
  }
  snippet: SnippetProps
}

export interface SnippetProps {
  publishedAt: string
  channelId: string
  title: string
  description: string
  thumbnails: {
    high: {
      url: string
      height: number
      width: number
    }
  }
  channelTitle: string
  liveBroadcastContent: string
}
