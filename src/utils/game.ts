import { MbtiProp, MbtiResult } from '@/pages/Game/Game2/Game2.types'

export const caculateMbtiResult = (answers: MbtiProp[]): MbtiResult => {
  const typeCount = {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  }
  answers.forEach((type) => {
    typeCount[type] += 1
  })
  const result: string[] = []
  result.push(typeCount['E'] > typeCount['I'] ? 'E' : 'I')
  result.push(typeCount['S'] > typeCount['N'] ? 'S' : 'N')
  result.push(typeCount['T'] > typeCount['F'] ? 'T' : 'F')
  result.push(typeCount['J'] > typeCount['P'] ? 'J' : 'P')
  return result.join('') as MbtiResult
}
