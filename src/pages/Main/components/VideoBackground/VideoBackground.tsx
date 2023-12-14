import type { PropsWithChildren } from 'react'
import * as S from './VideoBackground.styles'
import type { VideoBackgroundProps } from './VideoBackground.types'

export const VideoBackground = ({ src, children }: PropsWithChildren<VideoBackgroundProps>) => {
  return (
    <section>
      <S.Video autoPlay loop muted>
        <source src={src} type="video/mp4" />
      </S.Video>
      {children}
    </section>
  )
}
