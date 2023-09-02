import { ProgressBar } from '@/components/progressBar'
import { PALETTE } from '@/styles'
import type { FC } from 'react'
import { useState } from 'react'
import { game2QuestionAndAnswer } from '../../Game2.constants'
import type { SectionProps } from '../../Game2.types'
import * as S from './TestSection.styles'

const endPage = 12
const progressBgColor = PALETTE.purple[100]

export const TestSection: FC<SectionProps> = ({ onTestStateChange }) => {
  const [nowPage, setPage] = useState(1)

  const onNextPage = () => {
    if (nowPage === endPage) {
      onTestStateChange('after')
      return
    }
    setPage((prev) => prev + 1)
  }

  return (
    <S.Container>
      {game2QuestionAndAnswer.map((qna, index) => (
        <S.ContentSection key={index} isThisPage={index === nowPage}>
          <ProgressBar newPercentage={(nowPage / game2QuestionAndAnswer.length) * 100} bgColor={progressBgColor} />
          <S.Title dangerouslySetInnerHTML={{ __html: qna.question }} />
          <S.AnswerContainer>
            {qna.answers.map((ans) => (
              <S.AnswerBox onClick={onNextPage} dangerouslySetInnerHTML={{ __html: ans.answer }} />
            ))}
          </S.AnswerContainer>
        </S.ContentSection>
      ))}
    </S.Container>
  )
}