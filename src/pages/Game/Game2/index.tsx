import { caculateMbtiResult } from '@/utils'
import { useState } from 'react'
import type { GameStateProp } from '../Game.types'
import * as S from './Game2.styles'
import type { MbtiProp, MbtiResult } from './Game2.types'
import { IntroSection, ResultSection, TestSection } from './components'

const Game2Page = () => {
  const [testState, setTestState] = useState<GameStateProp>('before')
  const [testResult, setTestResult] = useState<MbtiResult>()

  const onSubmitAnswersList = (answers: MbtiProp[]) => {
    const usersMbti = caculateMbtiResult(answers)
    setTestResult(usersMbti)
  }

  const onTestStateChange = (state: GameStateProp) => {
    setTestState(state)
  }

  return (
    <S.Wrapper>
      {testState === 'before' && <IntroSection onNextState={() => onTestStateChange('ing')} />}
      {testState === 'ing' && (
        <TestSection onNextState={() => onTestStateChange('after')} onSubmit={onSubmitAnswersList} />
      )}
      {testState === 'after' && testResult && (
        <ResultSection onNextState={() => onTestStateChange('before')} result={testResult} />
      )}
    </S.Wrapper>
  )
}

export default Game2Page
