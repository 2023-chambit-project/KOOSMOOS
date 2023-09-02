export type MbtiProp = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'P' | 'J'

export interface answerProp {
  type: MbtiProp
  answer: string
}

export interface QuestionAndAnswerProp {
  question: string
  answers: [answerProp, answerProp]
}

export type TestStateProp = 'before' | 'ing' | 'after'

export interface SectionProps {
  onTestStateChange: (state: TestStateProp) => void
}
