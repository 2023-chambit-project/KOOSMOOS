import { modalPropsAtom } from '@/atoms/modalProps.atom'
import { useSetRecoilState } from 'recoil'

export const useModal = () => {
  const setModalProps = useSetRecoilState(modalPropsAtom)
  const onClose = () => {
    setModalProps((prev) => {
      return { ...prev, isOpen: false }
    })
  }
  const onModalOpen = ({ ...props }) => {
    setModalProps((prev) => {
      return { ...prev, ...props, isOpen: true, onClose }
    })
  }
  return { open: onModalOpen }
}
