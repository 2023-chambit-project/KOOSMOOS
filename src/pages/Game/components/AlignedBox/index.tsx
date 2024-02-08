import { Button } from '@/components'
import { ALIGN_VALUE, COMMON_TEXT } from '@/constants'
import { useModal } from '@/hooks'
import { faSpaceShuttle } from '@fortawesome/free-solid-svg-icons'
import type { FC, HTMLAttributes, PropsWithChildren } from 'react'
import { useNavigate } from 'react-router-dom'
import type { AlignProp, SymmetryProps } from '../../Game.types'
import * as S from './AlignedBox.styles'

interface Props extends HTMLAttributes<HTMLDivElement>, SymmetryProps {}

export const AlignedArea: FC<PropsWithChildren<Props>> = ({ align, children, ...props }) => {
  const navigate = useNavigate()
  const modal = useModal()

  /**
   * @description
   * - 'Explore More' 버튼 클릭 이벤트 처리
   * - 왼쪽 버튼 클릭 시, 모달 등장
   * - 오른쪽 버튼 클릭 시, Game2 게임으로 이동
   */
  const onClickExploreMoreButton = (align: AlignProp) => {
    if (align === 'left') modal.open({ message: '⚠️ 서비스 준비 중입니다.' })
    else navigate(`/${ALIGN_VALUE[align].to}`)
  }

  return (
    <S.AlignedArea align={align} {...props}>
      <S.ThumbnailImg src={ALIGN_VALUE[align].imgSrc} />
      {children}
      <S.TitleAndButton align={align}>
        <h1>{ALIGN_VALUE[align].titleText}</h1>
        <Button icon={faSpaceShuttle} $bgColor="transparent" onClick={() => onClickExploreMoreButton(align)}>
          {COMMON_TEXT.buttonText}
        </Button>
      </S.TitleAndButton>
    </S.AlignedArea>
  )
}
