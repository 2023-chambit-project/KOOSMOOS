import { FlexAlignCSS } from '@/styles'
import styled from 'styled-components'

export const Container = styled.div`
  width: 50%;
  margin: 0 auto;

  & a {
    color: #f9d49d;
  }

  & img {
    max-width: 100%;
  }
`

export const Thumbnail = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 2rem;
`

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.FONT_SIZE.big};
  margin-bottom: 4rem;
`

export const ProfileSection = styled.section`
  ${FlexAlignCSS}
  justify-content: flex-start;
  gap: 1.3rem;
`

export const ProfileImage = styled.img`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
`

export const NickName = styled.p`
  font-weight: bold;
  color: ${({ theme }) => theme.COLOR.common.gray[300]};
`

export const Date = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.tiny};
  color: ${({ theme }) => theme.COLOR.common.gray[500]};
`

export const ContentWrap = styled.div`
  margin: 3rem 0;
  max-width: 100%;

  & > * {
    max-width: 100%;
  }
`
