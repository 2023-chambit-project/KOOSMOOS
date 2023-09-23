import { useState } from 'react'
import * as S from './Game1.styles'
import type { ObservationProps } from './Game1.types'
import VerticalListSection from './components/VerticalListSection'

const Game1Page = () => {
  const [target] = useState<ObservationProps>('moon')

  return (
    <>
      {target == 'moon' ? (
        <>
          <S.NightSky>
            <VerticalListSection />
          </S.NightSky>
        </>
      ) : (
        <h1>'깃발본다.'</h1>
      )}
    </>
  )
}

export default Game1Page
