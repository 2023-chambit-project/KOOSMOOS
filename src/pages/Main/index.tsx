import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import * as S from './Main.styles'
import { LandingSection1, LandingSection2, LandingSection3 } from './section'

const MainPage = () => {
  return (
    <S.MainContainer>
      <Parallax pages={3}>
        <ParallaxLayer offset={0}>
          <LandingSection1 />
        </ParallaxLayer>
        <ParallaxLayer offset={1}>
          <LandingSection2 />
        </ParallaxLayer>
        <ParallaxLayer offset={2}>
          <LandingSection3 />
        </ParallaxLayer>
      </Parallax>
    </S.MainContainer>
  )
}

export default MainPage
