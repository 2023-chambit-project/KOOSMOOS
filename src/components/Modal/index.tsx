import { modalPropsAtom } from '@/atoms/modalProps.atom'
import { ModalProps } from '@/atoms/modalProps.type'
import { FC } from 'react'
import { createPortal } from 'react-dom'
import { useRecoilValue } from 'recoil'
import { Button } from '../Button'
import * as S from './Modal.styles'

const PureModal: FC<ModalProps> = ({ message, onClose }) => {
  return (
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
  )
}

const modalElement = document.getElementById('modal') as HTMLElement

const Modal = () => {
  const modalProps = useRecoilValue(modalPropsAtom)
  if (!modalProps.isOpen) return <></>
  return <>{createPortal(<PureModal {...modalProps} />, modalElement)}</>
}

export default Modal
