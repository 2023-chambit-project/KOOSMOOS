import { atom } from 'recoil'

export const curFlagIndexAtom = atom<number>({
  key: 'curFlagIndexAtom',
  default: 0,
})
