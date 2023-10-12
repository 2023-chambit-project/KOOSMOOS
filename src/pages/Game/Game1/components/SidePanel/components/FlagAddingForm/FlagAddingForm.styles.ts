import { FlexAlignCSS, FlexColumnCSS } from '@/styles'
import { styled } from 'styled-components'
// 스타일드 컴포넌트를 사용하여 입력 필드를 스타일링합니다.

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  ${FlexColumnCSS}
  justify-content: space-between;
  align-items: start;
`
export const InputLabel = styled.label`
  font-size: ${({ theme }) => theme.FONT_SIZE.small};
  font-family: 'PyeongChangPeace-Light';
  margin-left: 10px;
  @media screen and (max-width: ${({ theme }) => theme.MEDIA.laptop}) {
    font-size: ${({ theme }) => theme.FONT_SIZE.tiny};
  }
`
export const SimpleInputWrapper = styled.div`
  width: 100%;
  height: 15%;
  ${FlexAlignCSS}
  justify-content: space-between;
  color: ${({ theme }) => theme.COLOR.common.white};
  padding: 0.5rem;
  border-radius: 1rem;
`
export const SimpleInputField = styled.input`
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.COLOR.common.black};
  min-width: 40%;
  width: fit-content;
  height: 100%;
  font-size: ${({ theme }) => theme.FONT_SIZE.tiny};
  color: ${({ theme }) => theme.COLOR.common.white};
  text-align: center;
  &::placeholder {
    font-size: ${({ theme }) => theme.FONT_SIZE.tiny};
    text-align: center;
  }
`
export const GreetingInputWrapper = styled.div`
  width: 100%;
  height: 50%;
  ${FlexColumnCSS}
  justify-content: space-evenly;
  color: ${({ theme }) => theme.COLOR.common.white};
  padding: 0.5rem;
  border-radius: 1rem;
`
export const GreetingTextarea = styled.textarea`
  resize: none;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.COLOR.common.black};
  width: 100%;
  height: 70%;
  font-size: ${({ theme }) => theme.FONT_SIZE.tiny};
  color: ${({ theme }) => theme.COLOR.common.white};
  text-align: start;
  padding: 10px;
  overflow-y: hidden;
  &::placeholder {
    font-size: ${({ theme }) => theme.FONT_SIZE.tiny};
    text-align: center;
  }
`
export const DirectionToggle = styled.button<{ bgColor: string }>`
  width: 10%;
  aspect-ratio: 1/1;
  border-radius: 5px;
  font-size: ${({ theme }) => theme.FONT_SIZE.medium};
  color: ${({ theme }) => theme.COLOR.common.white};
  background-color: ${({ bgColor }) => bgColor};
  text-align: center;
  transition: background-color 0.08s ease-in;
  text-shadow: 1px 1px 1px ${({ theme }) => theme.COLOR.common.black};
`
