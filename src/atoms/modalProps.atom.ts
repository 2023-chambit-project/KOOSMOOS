import { ATOM_KEY } from '@/constants/index'
import { atom } from 'recoil'
import { ModalProps } from './modalProps.type'

export const modalPropsAtom = atom<ModalProps>({
  key: ATOM_KEY.MODAL_PROPS,
  default: {
    isOpen: false,
    message: '',
    onClose: () => {},
  },
})
