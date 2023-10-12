import { coordinateLocation } from '@/atoms/coordinateLocation.atom'
import { curFlagIndexAtom } from '@/atoms/curFlagIndex.atom'
import { Icon } from '@/components/Icon'
import type { FlagListProp, LocationProp } from '@/pages/Game/Game1/Game1.types'
import type { FlagProp } from '@/types'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FC, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import * as S from './VerticalList.styles'
export const VerticalList: FC<FlagListProp> = ({ flagList }) => {
  const [curFlagIndex, setCurFlagIndex] = useRecoilState<number>(curFlagIndexAtom)
  const [, setCoordinate] = useRecoilState<LocationProp>(coordinateLocation)

  /* 최초 랜더링 시, flagList 의 첫번째 요소 가리키도록 curFlagIndex를 0으로 초기화 */
  useEffect(() => {
    setCurFlagIndex(0)
  }, [])
  /* curFlagIndex 상태 변화 시, flagList 의 해당 요소 좌표를 Pointer 가 가리키도록 {posX,posY} 값을 현재 요소의 그것으로 할당 */
  useEffect(() => {
    setCoordinate({ posX: flagList[curFlagIndex].posX, posY: flagList[curFlagIndex].posY })
  }, [curFlagIndex])
  return (
    <>
      <S.Divider />
      <S.GreetingListContainer>
        {flagList.map((val: FlagProp, idx) => (
          <S.GreetingItem
            key={idx}
            selected={idx == curFlagIndex}
            onClick={() => {
              setCurFlagIndex(idx)
            }}
          >
            <S.UsersProfileImg src={val.img_src} />
            <S.UsersTextWrapper>
              <S.UsersNicknameText>{val.writer}</S.UsersNicknameText>
              <S.UsersGreetingText>{val.greeting}</S.UsersGreetingText>
            </S.UsersTextWrapper>
            <Icon icon={faMagnifyingGlass} />
          </S.GreetingItem>
        ))}
      </S.GreetingListContainer>
      <S.Divider />
    </>
  )
}
