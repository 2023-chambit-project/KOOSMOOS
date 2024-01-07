import { modalPropsAtom } from '@/atoms/modalProps.atom'
import { useRecoilValue } from 'recoil'
import { Button } from '../Button'
import * as S from './Modal.styles'

const Modal = () => {
  const { isOpen, message, onClose } = useRecoilValue(modalPropsAtom)
  return (
    <>
      {isOpen && (
        <S.Container>
          <S.ContentCard>
            <S.ModalBody>{message}</S.ModalBody>
            <S.ModalFooter>
              <Button
                variant={'outlined'}
                onClick={() => {
                  onClose()
                }}
              >
                확인
              </Button>
            </S.ModalFooter>
          </S.ContentCard>
        </S.Container>
      )}
    </>
  )
}

export default Modal
