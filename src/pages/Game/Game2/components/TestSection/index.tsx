import { ProgressBar } from '@/components'
import { PALETTE } from '@/styles'
import type { FC } from 'react'
import { useEffect, useState } from 'react'
import { game2QuestionAndAnswer } from '../../Game2.constants'
import type { MbtiProp, SectionProps } from '../../Game2.types'
import * as S from './TestSection.styles'

interface Props extends SectionProps {
  onSubmit: (answers: MbtiProp[]) => void
}

const endPage = 12
const progressBgColor = PALETTE.purple[100]

export const TestSection: FC<Props> = ({ onNextState, onSubmit }) => {
  const [nowPage, setPage] = useState(0)
  const [answers, setAnswers] = useState<MbtiProp[]>([])

  const onNextPage = (ans: MbtiProp) => {
    setAnswers((prev) => [...prev, ans])
    setPage((prev) => prev + 1)
  }

  useEffect(() => {
    if (nowPage === endPage) {
      onNextState()
      onSubmit(answers)
    }
  }, [nowPage, onNextState, answers, onSubmit])

  return (
    <S.Container>
      {game2QuestionAndAnswer.map((qna, index) => (
        <S.ContentSection key={qna.question} isThisPage={index === nowPage}>
          <ProgressBar
            newPercentage={((nowPage + 1) / (game2QuestionAndAnswer.length + 1)) * 100}
            bgColor={progressBgColor}
          />
          <S.Title dangerouslySetInnerHTML={{ __html: qna.question }} />
          <S.AnswerContainer>
            {qna.answers.map((ans) => (
              <S.AnswerBox
                key={ans.answer}
                onClick={() => onNextPage(ans.type)}
                dangerouslySetInnerHTML={{ __html: ans.answer }}
              />
            ))}
          </S.AnswerContainer>
        </S.ContentSection>
      ))}
    </S.Container>
  )
}
