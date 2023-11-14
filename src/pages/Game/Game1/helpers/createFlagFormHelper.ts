import type { MoonProp, PostGame1FlagReqBody } from '@/types'
import { moonRadius, subCircleRadius } from '../Game1.constants'
import type { MoonShapeProp } from '../Game1.types'

export const formValidate = ({ writer, posX, posY, greeting, moonShape }: PostGame1FlagReqBody & MoonShapeProp) => {
  let disabled = false
  const errors: Record<keyof PostGame1FlagReqBody, boolean> = {
    writer: false,
    posX: false,
    posY: false,
    greeting: false,
  }

  const writerValidateRes = writerValidate(writer)
  const coordinateValidateRes = coordinateValidate(posX, posY, moonShape)
  const greetingValidateRes = greetingValidate(greeting)

  disabled = writerValidateRes || coordinateValidateRes || greetingValidateRes

  errors.writer = writerValidateRes
  errors.posX = coordinateValidateRes
  errors.posY = coordinateValidateRes
  errors.greeting = greetingValidateRes
  return { disabled, errors }
}

const writerValidate = (writer: string) => {
  if (writer.length < 2 || writer.length > 8) return true
  return false
}

const greetingValidate = (greeting: string) => {
  if (greeting.length == 0 || greeting.length > 30) return true
  return false
}

const coordinateValidate = (posX: number, posY: number, moonShape: MoonProp) => {
  let disabled = false

  // (0,0) 를 중심으로 하는 원 밖에 있으면, disabled
  if (Math.pow(posX, 2) + Math.pow(posY, 2) > Math.pow(moonRadius, 2)) disabled = true
  else {
    switch (moonShape) {
      // 'newMoon' 이면 disabled
      case 'newMoon':
        disabled = true
        break
      // (-45,0) 를 중심으로 하는 반지름이 subCircleRadius인 원의 내부에 있다면 disabled
      case 'waxingCrescent':
        if (Math.pow(-45 - posX, 2) + Math.pow(posY, 2) < Math.pow(subCircleRadius, 2)) disabled = true
        break
      // x 좌표가 음수면 disabled
      case 'firstQuarter':
        if (posX < 0) disabled = true
        break
      // (45,0) 을 중심으로 하는 반지름이 subCircleRadius인 원의 바깥에 있다면 disabled
      case 'waxingGibbous':
        if (Math.pow(45 - posX, 2) + Math.pow(posY, 2) > Math.pow(subCircleRadius, 2)) disabled = true
        break
      // 'fullMoon' 이면 disabled 아니다!!
      case 'fullMoon':
        disabled = false
        break
      // (-45,0) 을 중심으로 하는 반지름이 subCircleRadius인 원의 바깥에 있다면 disabled
      case 'waningGibbous':
        console.log(posX)
        console.log('x 제곱 : ' + (posX + 45) ** 2)
        console.log('y 제곱 : ' + Math.pow(posY, 2))
        console.log('Math.pow(posX + 45, 2) + Math.pow(posY, 2): ' + (Math.pow(posX + 45, 2) + Math.pow(posY, 2)))
        console.log('Math.pow(subCircleRadius, 2): ' + Math.pow(subCircleRadius, 2))
        if (Math.pow(-45 - posX, 2) + Math.pow(posY, 2) > Math.pow(subCircleRadius, 2)) disabled = true
        break
      // x 좌표가 양수면 disabled
      case 'thirdQuarter':
        if (posX > 0) disabled = true
        break
      // (45,0) 를 중심으로 하는 반지름이 subCircleRadius인 원의 내부에 있다면 disabled
      case 'waningCrescent':
        if (Math.pow(45 - posX, 2) + Math.pow(posY, 2) < Math.pow(subCircleRadius, 2)) disabled = true
        break
    }
  }
  return disabled
}
