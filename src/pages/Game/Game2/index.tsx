import { useState } from 'react'
import * as S from './Game2.styles'
import type { TestStateProp } from './Game2.types'
import { IntroSection } from './components/IntroSection'
import { ResultSection } from './components/ResultSection'
import { TestSection } from './components/TestSection'

const Game2Page = () => {
  const [testState, setTestState] = useState<TestStateProp>('before')

  const onTestStateChange = (state: TestStateProp) => {
    setTestState(state)
  }

  return (
    <S.Wrapper>
      {testState === 'before' && <IntroSection onNextState={() => onTestStateChange('ing')} />}
      {testState === 'ing' && <TestSection onNextState={() => onTestStateChange('after')} />}
      {testState === 'after' && <ResultSection onNextState={() => onTestStateChange('before')} />}
    </S.Wrapper>
  )
}

export default Game2Page
