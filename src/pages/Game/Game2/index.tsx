import { usePostGame2Answers } from '@/services'
import type { PostGame2ResultReqBody } from '@/types'
import { useState } from 'react'
import * as S from './Game2.styles'
import type { TestStateProp } from './Game2.types'
import { IntroSection, ResultSection, TestSection } from './components'

const Game2Page = () => {
  const [testState, setTestState] = useState<TestStateProp>('before')
  const { mutate, data: game2Result } = usePostGame2Answers()

  const onSubmitAnswersList = (answers: PostGame2ResultReqBody['answers']) => {
    mutate(answers)
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
      {testState === 'after' && game2Result && (
        <ResultSection onNextState={() => onTestStateChange('before')} result={game2Result.data.resultImageSrc} />
      )}
    </S.Wrapper>
  )
}

export default Game2Page
