import { caculateMbtiResult } from '@/utils'
import { useState } from 'react'
import * as S from './Game2.styles'
import type { MbtiProp, MbtiResult, TestStateProp } from './Game2.types'
import { IntroSection, ResultSection, TestSection } from './components'

const Game2Page = () => {
  const [testState, setTestState] = useState<TestStateProp>('before')
  const [testResult, setTestResult] = useState<MbtiResult>()

  const onSubmitAnswersList = (answers: MbtiProp[]) => {
    const usersMbti = caculateMbtiResult(answers)
    setTestResult(usersMbti)
  }

  const onTestStateChange = (state: TestStateProp) => {
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
