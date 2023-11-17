import { curFlagIndexAtom } from '@/atoms/curFlagIndex.atom'
import { flagListAtom } from '@/atoms/flagList.atom'
import { moonShapeAtom } from '@/atoms/moonShape.atom'
import { sidePanelModeAtom } from '@/atoms/sidePanelMode.atom'
import { ButtonV2 } from '@/components/ButtonV2'
import { createFlagTemplate, moonRadius } from '@/pages/Game/Game1/Game1.constants'
import type { PanelModeProp } from '@/pages/Game/Game1/Game1.types'
import { formValidate } from '@/pages/Game/Game1/helpers/createFlagFormHelper'
import { usePostGame1Flag } from '@/services'
import { theme } from '@/styles'
import type { FlagProp, MoonProp } from '@/types'
import { ChangeEvent, MouseEvent, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import * as S from './FlagAddingForm.styles'

export const FlagAddingForm = () => {
  const [flagList, setFlagList] = useRecoilState<FlagProp[]>(flagListAtom)
  const [curFlagIndex, setCurFlagIndex] = useRecoilState(curFlagIndexAtom)
  const [moonShape] = useRecoilState<MoonProp>(moonShapeAtom)
  const [, setPanelMode] = useRecoilState<PanelModeProp>(sidePanelModeAtom)
  const { mutate } = usePostGame1Flag()

  // 첫 렌더링 시, flagList 맨 뒤에 flag template 추가
  useEffect(() => {
    setFlagList((prev) => {
      const _flagList = [...prev]
      _flagList.push(createFlagTemplate)
      return _flagList
    })
    // unmount 시, flag template 을 활용해 깃발이 생성되어 있지 않다면 flag template 제거
    return () => {
      setCurFlagIndex(0)
      setFlagList((prev) => {
        const _flagList = [...prev]
        _flagList.pop()
        return _flagList
      })
    }
  }, [setFlagList, setCurFlagIndex])

  // flagList 에 flag template 이 추가된 후, curFlagIndex 가 해당 깃발을 가르키도록 설정
  useEffect(() => {
    setCurFlagIndex(flagList.length - 1)
  }, [flagList, setCurFlagIndex])

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
    setFlagList((prev) => {
      const _flagList = [...prev]
      const _flagInfo = { ..._flagList[curFlagIndex], [e.target.name]: e.target.value }
      _flagList[curFlagIndex] = _flagInfo
      return _flagList
    })
  }
  // Toggle 버튼 클릭 시, 위치 반전
  const changeDirectionToggle = (e: MouseEvent<HTMLButtonElement>) => {
    setFlagList((prev) => {
      const _flagList = [...prev]
      let value = 0
      if (e.currentTarget.name === 'posY') {
        value = _flagList[curFlagIndex].posY * -1
      } else {
        console.log('posX')
        value = _flagList[curFlagIndex].posX * -1
      }
      const _flagInfo = { ..._flagList[curFlagIndex], [e.currentTarget.name]: value }
      _flagList[curFlagIndex] = _flagInfo
      return _flagList
    })
  }
  // 제출 버튼 클릭 시
  const onClickSubmitBtn = () => {
    if (disabled) {
      window.alert('🛑 위치를 변경거나, 내용 작성 조건을 다시 확인해주세요.')
      return
    }
    try {
      mutate({ ...flagList[curFlagIndex] })
      window.alert('축하합니다.🎉 여러분의 깃발에 달에 꽂혔습니다.')
      setFlagList((prev) => {
        const _flagList = [...prev]
        _flagList.push({ ..._flagList[curFlagIndex] })
        return _flagList
      })
    } catch (e) {
      window.alert('데이터 전송에 실패했습니다.')
    } finally {
      setPanelMode('observation')
    }
  }

  const { disabled, errors } = formValidate({
    writer: flagList[curFlagIndex].writer,
    posX: flagList[curFlagIndex].posX,
    posY: flagList[curFlagIndex].posY,
    greeting: flagList[curFlagIndex].greeting,
    moonShape: moonShape,
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
        />
      </S.SimpleInputWrapper>

      <S.SimpleInputWrapper>
        <S.InputLabel>달의 위도</S.InputLabel>
        <S.DirectionToggle
          bgColor={flagList[curFlagIndex].posY < 0 ? theme.COLOR.alert[100] : theme.PALETTE.blue[100]}
          name="posY"
          onClick={changeDirectionToggle}
        >
          {flagList[curFlagIndex].posY < 0 ? 'S' : 'N'}
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
          value={flagList[curFlagIndex].posY}
        />
      </S.SimpleInputWrapper>

      <S.SimpleInputWrapper>
        <S.InputLabel>달의 경도</S.InputLabel>
        <S.DirectionToggle
          bgColor={flagList[curFlagIndex].posX < 0 ? theme.PALETTE.yellow[100] : theme.PALETTE.purple[70]}
          name="posX"
          onClick={changeDirectionToggle}
        >
          {flagList[curFlagIndex].posX < 0 ? 'W' : 'E'}
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
          value={flagList[curFlagIndex].posX}
        />
      </S.SimpleInputWrapper>

      <S.GreetingInputWrapper>
        <S.InputLabel>인삿말</S.InputLabel>
        <S.GreetingTextarea
          name="greeting"
          placeholder="2자 ~ 30자 이내"
          $isError={errors.greeting}
          onChange={onChangeForm}
        />
      </S.GreetingInputWrapper>

      <ButtonV2 onClick={onClickSubmitBtn} size="full" bgColor={theme.PALETTE.orange[100]} round="very">
        달로 전송하기.. 🚀
      </ButtonV2>
    </S.Form>
  )
}
