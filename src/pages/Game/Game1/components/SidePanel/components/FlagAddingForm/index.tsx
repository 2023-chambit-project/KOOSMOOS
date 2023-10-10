import { theme } from '@/styles'
import type { PostGame1FlagReqBody } from '@/types'
import { ChangeEvent, useState } from 'react'
import * as S from './FlagAddingForm.styles'

export const FlagAddingForm = () => {
  const [flagInfo, setFlagInfo] = useState<PostGame1FlagReqBody>({ writer: '', greeting: '', posX: 0, posY: 0 })
  // 작성자 닉네임은 8자 이내의 문자열이어야 한다.
  const handleNicknameText = (event: ChangeEvent<HTMLInputElement>) => {
    const nickname: string = event.target.value
    if (nickname.length <= 8) {
      setFlagInfo((prev) => ({
        ...prev,
        ['writer']: nickname,
      }))
    }
  }
  // 좌표 는 [-90.0 ~ 90.0] 사이의 실수값을 가져야한다.
  const handleCoordinate = (event: ChangeEvent<HTMLInputElement>, axis: string) => {
    let coordinate: string = event.target.value
    // inputField 가 완전히 비었다면, 0 으로 초기화
    if (!coordinate.length) {
      setFlagInfo((prev) => ({
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
      setFlagInfo((prev) => ({
        ...prev,
        [axis]: coordinate,
      }))
    }
  }
  // 인사말은 20자 이내의 문자열이어야 한다.
  const handleGreetingText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const greetingText: string = event.target.value
    if (greetingText.length <= 20) {
      setFlagInfo((prev) => ({
        ...prev,
        ['greeting']: greetingText,
      }))
    }
  }

  const handleDirectionToggle = (axis: string) => {
    let parsedCoordinate = 0.0
    if (axis === 'posX') {
      parsedCoordinate = -flagInfo.posX
    } else {
      parsedCoordinate = -flagInfo.posY
    }
    setFlagInfo((prev) => ({
      ...prev,
      [axis]: '' + parsedCoordinate,
    }))
  }
  return (
    <S.Container>
      <S.SimpleInputWrapper>
        <S.InputLabel>이름</S.InputLabel>
        <S.SimpleInputField
          type="text"
          placeholder="8자 이내"
          value={flagInfo.writer}
          onChange={(e) => handleNicknameText(e)}
        />
      </S.SimpleInputWrapper>

      <S.SimpleInputWrapper>
        <S.InputLabel>달의 위도</S.InputLabel>
        <S.DirectionToggle
          bgColor={flagInfo.posY < 0 ? theme.COLOR.error : theme.PALETTE.blue[100]}
          onClick={() => {
            handleDirectionToggle('posY')
          }}
        >
          {flagInfo.posY < 0 ? 'S' : 'N'}
        </S.DirectionToggle>
        <S.SimpleInputField
          type="number"
          step={0.1}
          min={-90}
          max={90}
          value={flagInfo.posY}
          onChange={(e) => handleCoordinate(e, 'posY')}
        />
      </S.SimpleInputWrapper>

      <S.SimpleInputWrapper>
        <S.InputLabel>달의 경도</S.InputLabel>
        <S.DirectionToggle
          bgColor={flagInfo.posX < 0 ? theme.PALETTE.yellow[100] : theme.PALETTE.purple[70]}
          onClick={() => {
            handleDirectionToggle('posX')
          }}
        >
          {flagInfo.posX < 0 ? 'W' : 'E'}
        </S.DirectionToggle>
        <S.SimpleInputField
          type="number"
          step={0.1}
          min={-90}
          max={90}
          value={flagInfo.posX}
          onChange={(e) => handleCoordinate(e, 'posX')}
        />
      </S.SimpleInputWrapper>

      <S.GreetingInputWrapper>
        <S.InputLabel>인삿말</S.InputLabel>
        <S.GreetingTextarea placeholder="20자 이내" value={flagInfo.greeting} onChange={handleGreetingText} />
      </S.GreetingInputWrapper>
    </S.Container>
  )
}
