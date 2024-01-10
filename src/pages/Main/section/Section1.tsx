import { ParallaxItem, VideoBackground } from '../components'
import * as S from './Section.styles'

import SPACE1_BACKGROUND from '@/assets/video/space1.mp4'
import { Parallax } from '@react-spring/parallax'
import LOGO_IMAGE from '/assets/logo/logo_512x105.svg'

export const LandingSection1 = () => {
  return (
    <S.SectionContainer>
      <VideoBackground src={SPACE1_BACKGROUND}>
        <Parallax pages={3}>
          <ParallaxItem offset={0}>
            <img src={LOGO_IMAGE} />
          </ParallaxItem>
          <ParallaxItem offset={1}>
            <S.Heading>
              온라인 우주과학관
              <br />
              방문을 환영합니다
            </S.Heading>
          </ParallaxItem>
          <ParallaxItem offset={2}>
            <S.Heading>
              코스모스에서
              <br />
              다양한 우주 콘텐츠를 즐겨보세요
            </S.Heading>
          </ParallaxItem>
        </Parallax>
      </VideoBackground>
    </S.SectionContainer>
  )
}
