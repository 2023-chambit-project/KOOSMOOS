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
