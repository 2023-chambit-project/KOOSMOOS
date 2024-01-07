export type MbtiProp = 'E' | 'I' | 'N' | 'S' | 'F' | 'T' | 'P' | 'J'

export type MbtiResult =
  | 'ENFJ'
  | 'ENFP'
  | 'ENTJ'
  | 'ENTP'
  | 'ESFJ'
  | 'ESFP'
  | 'ESTJ'
  | 'ESTP'
  | 'INFJ'
  | 'INFP'
  | 'INTJ'
  | 'INTP'
  | 'ISFJ'
  | 'ISFP'
  | 'ISTJ'
  | 'ISTP'

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
