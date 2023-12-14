import { css } from 'styled-components'

export const FlexAlignCSS = css`
  display: flex;
  align-items: center;
`

export const FlexCenterCSS = css`
  ${FlexAlignCSS}
  justify-content: center;
`

export const FlexBetweenCSS = css`
  ${FlexAlignCSS}
  justify-content: space-between;
`

export const FlexColumnCSS = css`
  display: flex;
  flex-direction: column;
`

export const ShadowCSS = css`
  box-shadow: 2px 2px 2px rgb(220, 220, 220);
`

export const GYFontCSS = css`
  font-family: 'GwangyangSunshine-Light';
`

export const PCFontCSS = css`
  font-family: 'PyeongChangPeace-Light';
`

export const ColumnNumberCSS = (count: number) => css`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(${count}, 1fr);
  column-gap: 3rem;
  row-gap: 3rem;

  @media screen and (max-width: ${({ theme }) => theme.MEDIA.tablet}) {
    grid-template-columns: repeat(1, 1fr);
    column-gap: 1rem;
    row-gap: 1rem;
  }
`
