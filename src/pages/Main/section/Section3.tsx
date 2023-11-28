import { Parallax } from '@react-spring/parallax'
import { ParallaxItem, VideoBackground } from '../components'
import * as S from './Section.styles'

import SPACE3_BACKGROUND from '@/assets/video/space3.mp4'
import LOGO_IMAGE from '/public/assets/logo/logo_512x105.svg'

export const LandingSection3 = () => {
  return (
    <S.SectionContainer>
      <VideoBackground src={SPACE3_BACKGROUND}>
        <Parallax pages={1}>
          <ParallaxItem offset={0}>
            <img src={LOGO_IMAGE} />
            <S.SubHeading>
              with
              <br />
              Kwangwoon univ. team Loss 🧑‍🚀
            </S.SubHeading>
          </ParallaxItem>
        </Parallax>
      </VideoBackground>
    </S.SectionContainer>
  )
}
