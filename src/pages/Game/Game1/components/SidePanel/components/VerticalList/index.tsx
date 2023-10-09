import { curFlagIndexAtom } from '@/atoms/curFlagIndex.atom'
import { Icon } from '@/components/Icon'
import type { FlagListProp } from '@/pages/Game/Game1/Game1.types'
import type { FlagProp } from '@/types'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FC } from 'react'
import { useRecoilState } from 'recoil'
import * as S from './VerticalList.styles'
export const VerticalList: FC<FlagListProp> = ({ flagList }) => {
  const [curFlagIndex, setCurFlagIndex] = useRecoilState<number>(curFlagIndexAtom)
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
