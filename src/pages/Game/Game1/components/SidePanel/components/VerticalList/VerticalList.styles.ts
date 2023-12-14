import { FlexAlignCSS, FlexColumnCSS } from '@/styles'
import { css, styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
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
export const GreetingItem = styled.div<{ selected: boolean }>`
  width: 90%;
  ${FlexAlignCSS}
  justify-content: end;
  margin: 2px;
  border-radius: 5px;
  padding: 1rem;
  cursor: pointer;
  transition: transform 0.1s ease-out;

  ${({ selected }) =>
    selected
      ? css`
          background-color: ${({ theme }) => theme.PALETTE.orange[100]};
          transform: translateX(-10px);
        `
      : css`
          background-color: ${({ theme }) => theme.COLOR.common.black};
        `}
`

export const UsersProfileImg = styled.img`
  width: 3.5rem;
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
  color: ${({ theme }) => theme.COLOR.common.gray[700]};
  font-size: 1.5rem;
`

export const UsersGreetingText = styled.p`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1.5rem;
`
