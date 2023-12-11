import styled from 'styled-components'

export const SectionContainer = styled.section`
  width: 100%;
  min-height: 900px;
  color: ${({ theme }) => theme.COLOR.common.white};
`

export const ItemContainer = styled.div<{ align?: 'center' | 'start' | 'end' }>`
  width: 100%;
  height: 90vh;
  padding: 10rem;
  flex-direction: column;
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: ${({ align = 'center' }) => (align === 'center' ? 'center' : `flex-${align}`)};
`

export const Heading = styled.h1<{ align?: 'center' | 'left' | 'right' }>`
  text-align: ${({ align = 'center' }) => align};
  font-size: 8rem;
`

export const SubHeading = styled.h2<{ align?: 'center' | 'left' | 'right' }>`
  text-align: ${({ align = 'center' }) => align};
  font-size: 3rem;
  font-family: 'GwangyangSunshine-Light';
  line-height: 5.5rem;
`
