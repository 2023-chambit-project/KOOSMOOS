import { coordinateLocation } from '@/atoms/coordinateLocation.atom'
import type { LocationProp } from '@/pages/Game/Game1/Game1.types'
import { theme } from '@/styles'
import { ChangeEvent, useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import * as S from './FlagAddingForm.styles'

export const FlagAddingForm = () => {
  const [writer, setWriter] = useState<string>('')
  const [greeting, setGreeting] = useState<string>('')
  const [coordinate, setCoordinate] = useRecoilState<LocationProp>(coordinateLocation)

  // 첫 랜더링 시, recoil 상태 초기화
  useEffect(() => {
    setCoordinate({ posX: 0, posY: 0 })
  }, [])

  // 작성자 닉네임은 8자 이내의 문자열이어야 한다.
  const handleNicknameText = (event: ChangeEvent<HTMLInputElement>) => {
    const nickname: string = event.target.value
    if (nickname.length <= 8) {
      setWriter(nickname)
    }
  }
  // 좌표 는 [-90.0 ~ 90.0] 사이의 실수값을 가져야한다.
  const handleCoordinate = (event: ChangeEvent<HTMLInputElement>, axis: string) => {
    let coordinate: string = event.target.value
    // inputField 가 완전히 비었다면, 0 으로 초기화
    if (!coordinate.length) {
      setCoordinate((prev) => ({
        ...prev,
        [axis]: 0,
      }))
      return
    }
    // inputField 가 비지 않았음에도 입력값의 맨 앞자리기 0 이라면 제거
    if (coordinate[0] === '0' && coordinate[1] !== '.') {
      coordinate = coordinate.substring(1)
    }
    const parsedCoordinate = parseFloat(coordinate)
    if (!isNaN(parsedCoordinate) && -90.0 <= parsedCoordinate && parsedCoordinate <= 90.0) {
      setCoordinate((prev) => ({
        ...prev,
        [axis]: coordinate,
      }))
    }
  }
  // 인사말은 30자 이내의 문자열이어야 한다.
  const handleGreetingText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const greetingText: string = event.target.value
    if (greetingText.length <= 30) {
      setGreeting(greetingText)
    }
  }

  const ChangeDirectionToggle = (axis: string) => {
    let parsedCoordinate = 0.0
    if (axis === 'posX') {
      parsedCoordinate = -coordinate.posX
    } else {
      parsedCoordinate = -coordinate.posY
    }
    setCoordinate((prev) => ({
      ...prev,
      [axis]: parsedCoordinate,
    }))
  }
  return (
    <S.Container>
      <S.SimpleInputWrapper>
        <S.InputLabel>이름</S.InputLabel>
        <S.SimpleInputField type="text" placeholder="8자 이내" value={writer} onChange={(e) => handleNicknameText(e)} />
      </S.SimpleInputWrapper>

      <S.SimpleInputWrapper>
        <S.InputLabel>달의 위도</S.InputLabel>
        <S.DirectionToggle
          bgColor={coordinate.posY < 0 ? theme.COLOR.error : theme.PALETTE.blue[100]}
          onClick={() => {
            ChangeDirectionToggle('posY')
          }}
        >
          {coordinate.posY < 0 ? 'S' : 'N'}
        </S.DirectionToggle>
        <S.SimpleInputField
          type="number"
          step={0.5}
          min={-90}
          max={90}
          value={coordinate.posY}
          onChange={(e) => handleCoordinate(e, 'posY')}
        />
      </S.SimpleInputWrapper>

      <S.SimpleInputWrapper>
        <S.InputLabel>달의 경도</S.InputLabel>
        <S.DirectionToggle
          bgColor={coordinate.posX < 0 ? theme.PALETTE.yellow[100] : theme.PALETTE.purple[70]}
          onClick={() => {
            ChangeDirectionToggle('posX')
          }}
        >
          {coordinate.posX < 0 ? 'W' : 'E'}
        </S.DirectionToggle>
        <S.SimpleInputField
          type="number"
          step={0.5}
          min={-90}
          max={90}
          value={coordinate.posX}
          onChange={(e) => handleCoordinate(e, 'posX')}
        />
      </S.SimpleInputWrapper>

      <S.GreetingInputWrapper>
        <S.InputLabel>인삿말</S.InputLabel>
        <S.GreetingTextarea placeholder="30자 이내" value={greeting} onChange={handleGreetingText} />
      </S.GreetingInputWrapper>
    </S.Container>
  )
}
