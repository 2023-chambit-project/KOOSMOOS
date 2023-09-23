import { FlexAlignCSS, FlexColumnCSS } from '@/styles'
import { styled } from 'styled-components'

export const Container = styled.div`
  width: 23%;
  height: 75%;
  position: absolute;
  right: 0%;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 5px 0 0 5px;
  padding: 2rem 1rem;
  font-family: 'GwangyangSunshine-Light';
  ${FlexColumnCSS}
  align-items: center;
  color: ${({ theme }) => theme.COLOR.common.white};
`

export const HeadingText = styled.p`
  text-align: center;
  font-weight: 900;
  font-size: ${({ theme }) => theme.FONT_SIZE.large};
  word-break: keep-all;
  margin: 2rem 0;
`
export const PointText = styled.span`
  color: ${({ theme }) => theme.PALETTE.yellow[100]};
  font-size: ${({ theme }) => theme.FONT_SIZE.big};
`

export const Divider = styled.div`
  background-color: ${({ theme }) => theme.COLOR.common.white};
  width: 70%;
  height: 1px;
  margin: 1rem;
`

export const GreetingListContainer = styled.div`
  width: 100%;
  min-height: 40%;
  max-height: 55%;
  overflow-y: auto;
  ${FlexColumnCSS}
  align-items: center;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.COLOR.common.gray[900]};
    border-radius: 10px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.PALETTE.yellow[100]};
    border-radius: 10px;
  }
`
export const GreetingItem = styled.div`
  width: 90%;
  background: rgba(0, 0, 0, 0.15);

  ${FlexAlignCSS}
  justify-content: start;

  margin: 0.3rem;
  border-radius: 5px;
  padding: 1rem;
  cursor: pointer;
`

export const UsersProfileImg = styled.img`
  max-width: 3.5rem;
  border-radius: 100rem;
  aspect-ratio: 1/1;
`
export const UsersTextWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin: 0 1rem;
`

export const UsersNicknameText = styled.p`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ theme }) => theme.COLOR.common.gray[600]};
  font-size: 1.5rem;
`

export const UsersGreetingText = styled.p`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1.5rem;
`

export const TrivialInfoContainer = styled.div`
  width: 100%;
  ${FlexColumnCSS}
  align-items: start;
  justify-content: center;
  padding: 0 2rem;
  margin-top: 1.5rem;
  gap: 0.5rem;
`

export const TrivialInfoInfoHeading = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.2rem;
`

export const TrivialInfoInfoBody = styled.p`
  font-size: 1.1rem;
  word-break: keep-all;
`
