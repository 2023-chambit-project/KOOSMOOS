import { modalPropsAtom } from '@/atoms/modalProps.atom'
import { useRecoilValue } from 'recoil'
import { Button } from '../Button'
import * as S from './Modal.styles'

const Modal = () => {
  const modalProps = useRecoilValue(modalPropsAtom)
  if (!modalProps.isOpen) return
  return (
    <S.Container>
      <S.ContentCard>
        <S.ModalBody>{modalProps.message}</S.ModalBody>
        <S.ModalFooter>
          <Button
            variant={'outlined'}
            onClick={() => {
              modalProps.onClose()
            }}
          >
            확인
          </Button>
        </S.ModalFooter>
      </S.ContentCard>
    </S.Container>
  )
}

export default Modal
