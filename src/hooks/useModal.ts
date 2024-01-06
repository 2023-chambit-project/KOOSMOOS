import { modalPropsAtom } from '@/atoms/modalProps.atom'
import { useSetRecoilState } from 'recoil'

export const useModal = () => {
  const setModalProps = useSetRecoilState(modalPropsAtom)
  const onClose = () => {
    setModalProps((prev) => ({ ...prev, isOpen: false }))
  }
  const onModalOpen = ({ ...props }) => {
    setModalProps((prev) => ({ ...prev, ...props, isOpen: true, onClose }))
  }
  return { open: onModalOpen }
}
