import { newFlagFormAtom } from '@/atoms/newFlagForm.atom'
import { viewTypeAtom } from '@/atoms/viewType.atom'
import { Button } from '@/components'
import { moonRadius } from '@/pages/Game/Game1/Game1.constants'
import type { ViewTypeProp } from '@/pages/Game/Game1/Game1.types'
import { formValidate } from '@/pages/Game/Game1/helpers/createFlagFormHelper'
import { useGetGame1Flags, usePostGame1Flag } from '@/services'
import { theme } from '@/styles'
import type { FlagProp } from '@/types'
import { ChangeEvent, MouseEvent, useEffect } from 'react'
import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil'
import * as S from './FlagAddingForm.styles'

export const FlagAddingForm = () => {
  const { data } = useGetGame1Flags()
  const { mutate } = usePostGame1Flag()
  const [newFlag, setNewFlag] = useRecoilState<FlagProp>(newFlagFormAtom)
  const resetNewFlag = useResetRecoilState(newFlagFormAtom)
  const setViewType = useSetRecoilState<ViewTypeProp>(viewTypeAtom)

  useEffect(() => {
    // 좌표를 확인할 수 있도록, general 시점으로 강제
    setViewType('general')
    resetNewFlag()
  }, [setViewType, resetNewFlag])

  // input 값이 변경될 시, 상태 최신화
  const onChangeForm = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    // 'writer' input 의 값이 8자를 초과하여 사용 못하도록 제한
    if (e.target.name === 'writer' && e.target.value.length > 8) {
      e.target.value = e.target.value.substring(0, 8)
      return
    }
    // 'greeting' input 의 값이 30자를 초과하여 사용 못하도록 제한
    if (e.target.name === 'greeting' && e.target.value.length > 30) {
      e.target.value = e.target.value.substring(0, 30)
      return
    }
    setNewFlag((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }
  // Toggle 버튼 클릭 시, 위치 반전
  const changeDirectionToggle = (e: MouseEvent<HTMLButtonElement>) => {
    setNewFlag((prev) => {
      const _newFlagInfo = { ...prev }
      if (e.currentTarget.name === 'posY') _newFlagInfo.posY *= -1
      else _newFlagInfo.posX *= -1

      return _newFlagInfo
    })
  }

  // 제출 버튼 클릭 시
  const onClickSubmitBtn = () => {
    if (disabled) {
      window.alert('🛑 위치를 변경거나, 내용 작성 조건을 다시 확인해주세요.')
      return
    }
    mutate({
      writer: newFlag.writer,
      greeting: newFlag.greeting,
      posX: newFlag.posX,
      posY: newFlag.posY,
    })
    window.alert('축하합니다. 깃발이 달에 무사히 도착하여 설처되었습니다. 🎉')
  }

  const { disabled, errors } = formValidate({
    writer: newFlag.writer,
    posX: newFlag.posX,
    posY: newFlag.posY,
    greeting: newFlag.greeting,
    moonShape: data!.moonShape,
  })

  return (
    <S.Form>
      <h1>{disabled}</h1>
      <S.SimpleInputWrapper>
        <S.InputLabel>이름</S.InputLabel>
        <S.SimpleInputField
          name="writer"
          $isError={errors.writer}
          type="text"
          placeholder="2자 ~ 8자 이내"
          onChange={onChangeForm}
          value={newFlag.writer}
        />
      </S.SimpleInputWrapper>

      <S.SimpleInputWrapper>
        <S.InputLabel>달의 위도</S.InputLabel>
        <S.DirectionToggle
          bgColor={newFlag.posY < 0 ? theme.COLOR.alert[100] : theme.PALETTE.blue[100]}
          name="posY"
          onClick={changeDirectionToggle}
        >
          {newFlag.posY < 0 ? 'S' : 'N'}
        </S.DirectionToggle>
        <S.SimpleInputField
          name="posY"
          type="number"
          step={1}
          min={-moonRadius}
          max={moonRadius}
          defaultValue={0}
          $isError={errors.posY}
          onChange={onChangeForm}
          value={newFlag.posY}
        />
      </S.SimpleInputWrapper>

      <S.SimpleInputWrapper>
        <S.InputLabel>달의 경도</S.InputLabel>
        <S.DirectionToggle
          bgColor={newFlag.posX < 0 ? theme.PALETTE.yellow[100] : theme.PALETTE.purple[70]}
          name="posX"
          onClick={changeDirectionToggle}
        >
          {newFlag.posX < 0 ? 'W' : 'E'}
        </S.DirectionToggle>
        <S.SimpleInputField
          name="posX"
          type="number"
          step={1}
          min={-moonRadius}
          max={moonRadius}
          defaultValue={0}
          $isError={errors.posX}
          onChange={onChangeForm}
          value={newFlag.posX}
        />
      </S.SimpleInputWrapper>

      <S.GreetingInputWrapper>
        <S.InputLabel>인삿말</S.InputLabel>
        <S.GreetingTextarea
          name="greeting"
          placeholder="2자 ~ 30자 이내"
          $isError={errors.greeting}
          onChange={onChangeForm}
          value={newFlag.greeting}
        />
      </S.GreetingInputWrapper>

      <Button onClick={onClickSubmitBtn} size="full" bgColor={theme.PALETTE.orange[100]} round="very">
        달로 전송하기.. 🚀
      </Button>
    </S.Form>
  )
}
