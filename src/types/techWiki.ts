export interface TechWikiSummaryListProps {
  posts: TechWikiPostSummaryProps[]
}

export interface TechWikiPostSummaryProps {
  id: string
  thumbnail: string
  title: string
  description: string
  date: string
}

export interface TechWikiPostProps extends Omit<TechWikiPostSummaryProps, 'description'> {
  content: string
  writer: {
    profile_img: string
    nickname: string
  }
}
