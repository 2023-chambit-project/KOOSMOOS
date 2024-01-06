import { modalPropsAtom } from '@/atoms/modalProps.atom'
import type { ModalProps } from '@/atoms/modalProps.type'
import { useSetRecoilState } from 'recoil'

export const useModal = () => {
  const setModalProps = useSetRecoilState<ModalProps>(modalPropsAtom)
  const onClose = () => {
    setModalProps((prev) => ({ ...prev, isOpen: false }))
  }
  const onModalOpen = ({ message }: Pick<ModalProps, 'message'>) => {
    setModalProps((prev) => ({ ...prev, message, isOpen: true, onClose }))
  }
  return { open: onModalOpen }
}
