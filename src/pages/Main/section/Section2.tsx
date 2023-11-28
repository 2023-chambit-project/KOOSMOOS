import { Parallax } from '@react-spring/parallax'
import { ParallaxItem, VideoBackground } from '../components'
import * as S from './Section.styles'

import SPACE2_BACKGROUND from '@/assets/video/space2.mp4'

export const LandingSection2 = () => {
  return (
    <S.SectionContainer>
      <VideoBackground src={SPACE2_BACKGROUND}>
        <Parallax pages={1}>
          <ParallaxItem align="end">
            <S.Heading>우주 과학을 위해</S.Heading>
            <S.SubHeading align="right">
              코스모스는 우주 과학을 알리기 위해 노력합니다.
              <br />
              다양한 우주 콘텐츠를 제공하여 모두가 함께 만드는
              <br />
              자유롭고 넓은 우주관을 위해 노력합니다.
              <br />
            </S.SubHeading>
          </ParallaxItem>
        </Parallax>
      </VideoBackground>
    </S.SectionContainer>
  )
}
