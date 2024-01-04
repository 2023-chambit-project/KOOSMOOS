import { atom } from 'recoil'
import { ModalProps } from './modalProps.type'

export const modalPropsAtom = atom<ModalProps>({
  key: 'modalPropsAtom',
  default: {
    isOpen: false,
    message: '',
    onClose: () => {},
  },
})
