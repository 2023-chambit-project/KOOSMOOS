import { curFlagIndexAtom } from '@/atoms/curFlagIndex.atom'
import { Icon } from '@/components/Icon'
import { useGetGame1Flags } from '@/services'
import type { FlagProp } from '@/types'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useRecoilState } from 'recoil'
import * as S from './VerticalList.styles'

export const VerticalList = () => {
  const { data } = useGetGame1Flags()
  const [curFlagIndex, setCurFlagIndx] = useRecoilState<number>(curFlagIndexAtom)

  /* curFlagIndex 상태 변화 시, flagList 의 해당 요소 좌표를 Pointer 가 가리키도록 {posX,posY} 값을 현재 요소의 그것으로 할당 */
  return (
    <S.Container>
      {data!.flagList?.map((val: FlagProp, idx) => (
        <S.GreetingItem
          key={idx}
          selected={idx == curFlagIndex}
          onClick={() => {
            setCurFlagIndx(idx)
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
    </S.Container>
  )
}
