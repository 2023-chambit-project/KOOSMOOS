import type { MbtiProp } from '@/types'
export interface answerProp {
  type: MbtiProp
  answer: string
}

export interface QuestionAndAnswerProp {
  question: string
  answers: [answerProp, answerProp]
}

export type TestStateProp = 'before' | 'ing' | 'after' | 'error'

export interface SectionProps {
  onNextState: VoidFunction
}
