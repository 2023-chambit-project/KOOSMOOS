import { Box, Button } from '@/components'
import { FlexBetweenCSS, FlexColumnCSS, GYFontCSS, PCFontCSS } from '@/styles'
import { css, styled } from 'styled-components'
import { PositionProps } from './Game.types'

interface Props extends PositionProps {}

const GameMainPage = () => {
  return (
    <DividedArea>
      <HalfBox align="left">
        <ThumbnailImg src="assets/img/FlagMoon.svg" />
        <Modal align="left">
          <MainHeading>
            오늘 만난
            <br />
            달님에게
            <br />
            인사해볼까요?
          </MainHeading>
          <Quotation>Hello, Artemis ~!</Quotation>
          <Divider />
          <SubHeading>프로그램 설명</SubHeading>
          <Box bgColor="#CCA148" variant="full" height="auto" style={{ padding: '1rem 0.2rem' }}>
            <IntroductionDetail>기분 좋은 인사말을 깃발에 적어주세요.</IntroductionDetail>
            <IntroductionDetail>"KOOSMOOS" 가 달 표면에 그 깃발을 꽂아 놓고 오겠습니다.!</IntroductionDetail>
            <IntroductionDetail>다른 사람들의 깃발을 구경만 해도 좋아요. </IntroductionDetail>
            <IntroductionDetail>단, 모든 일은 달이 밝은 면에서만 가능합니다.</IntroductionDetail>
            <IntroductionDetail>체험하기 전에 창문을 열고 오늘 뜬 달을 확인해 주세요.</IntroductionDetail>
            <IntroductionDetail>오늘 어두워 보이는 곳도 한 달 안에는 분명 다시 밝아질 겁니다.!</IntroductionDetail>
          </Box>
        </Modal>
        <TitleAndButton align="left">
          <h1>Hello, Artemis !</h1>
          <Button variant="ghost" size="fit" onClick={() => {}}>
            Explore More
          </Button>
        </TitleAndButton>
      </HalfBox>
      <HalfBox align="right">
        <ThumbnailImg src="assets/img/CelestialBodies.svg" />
        <Modal align="right">
          <MainHeading>
            "나" 는
            <br />
            어느 하늘에서
            <br />
            빛나고 있나요?
          </MainHeading>
          <SubHeading>심리-천체 유형 검사</SubHeading>
          <Divider />
          <SubHeading>프로그램 설명</SubHeading>
          <Box bgColor="#1562AF" variant="full" height="auto" style={{ padding: '1rem 0.2rem' }}>
            <IntroductionDetail>검사 시간은 총 10분입니다.</IntroductionDetail>
            <IntroductionDetail>현재의 내면 심리와 유사한 특성을 가진 천체이미지를 출력해드립니다.</IntroductionDetail>
            <IntroductionDetail>SNS 공유 기능을 활용하여 검사자님만의 천체를 홍보해보세요!</IntroductionDetail>
            <IntroductionDetail>
              인간의 성격을 5가지의 상호독립적인 요인으로 설명하는 "BIG 5 이론" 에 근거합니다.
            </IntroductionDetail>
          </Box>
        </Modal>
        <TitleAndButton align="right">
          <h1>나의 별 빛</h1>
          <Button variant="ghost" size="fit" onClick={() => {}}>
            Explore More
          </Button>
        </TitleAndButton>
      </HalfBox>
    </DividedArea>
  )
}
const Divider = styled.div`
  width: 100%;
  height: 0.2rem;
  background-color: ${({ theme }) => theme.COLOR.common.white};
`

const MainHeading = styled.h1`
  ${PCFontCSS}
  font-size: ${({ theme }) => theme.FONT_SIZE.huge};
`

const SubHeading = styled.h3`
  ${PCFontCSS}
  font-size: ${({ theme }) => theme.FONT_SIZE.large};
`
const IntroductionDetail = styled.li`
  ${GYFontCSS}
  font-size: ${({ theme }) => theme.FONT_SIZE.tiny};
  margin: 1rem;
  &::before {
    content: '- ';
  }
`

const Quotation = styled.h3`
  ${PCFontCSS}
  font-size: ${({ theme }) => theme.FONT_SIZE.large};
  font-style: italic;
  &::before {
    content: '“';
  }
  &::after {
    content: '”';
  }
`

const Modal = styled.div<Props>`
  ${FlexColumnCSS}
  align-items: start;
  justify-content: center;
  overflow: hidden;
  height: 100%;
  width: 0%;
  position: absolute;
  opacity: 0;
  padding: 0;
  text-align: left;
  gap: 2rem;
  color: ${({ theme }) => theme.COLOR.common.white};
  text-shadow: 0.05rem 0.05rem 0.05rem ${({ theme }) => theme.COLOR.common.black};

  transition:
    opacity 1s ease 8ms,
    width 5ms ease-out 8ms;

  ${({ align }) =>
    align === 'left'
      ? css`
          background-color: ${({ theme }) => theme.PALETTE.yellow[100]};
          right: 0;
          transform: translateX(75%);
        `
      : css`
          background-color: ${({ theme }) => theme.PALETTE.blue[100]};
          left: 0;
          transform: translateX(-75%);
        `}
`

// 게임 타이틀과 참가버튼을 포함하는 영역
const TitleAndButton = styled.div<Props>`
  ${FlexColumnCSS}
  ${GYFontCSS}

  z-index: 2;
  position: absolute;
  ${({ align }) =>
    align === 'left'
      ? css`
          left: 0;
          align-items: flex-start;
        `
      : css`
          right: 0;
          align-items: flex-end;
        `}
  align-self: flex-end;
  margin: 3rem 3rem;
  width: auto;
  height: auto;
  color: white;
  text-shadow: 2px 2px 2px ${({ theme }) => theme.COLOR.common.black};
`

// 게임 이미지 관련
const ThumbnailImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0.5;
  transition: transform 1s ease;
`

// 스크린 반쪽을 할당
const HalfBox = styled.div<Props>`
  ${FlexBetweenCSS}
  width: 50%;
  height: 100%;
  transition:
    transform 1s ease,
    opacity 1s ease;
  z-index: 0;

  // 마이스가 이미지 위에 올려졌을 때,
  &:hover {
    z-index: 1;

    // 모달
    & > ${Modal} {
      z-index: 1;
      opacity: 1;
      padding: 0 2rem;
      width: 35rem;
      color: white;
    }
    // 이미지
    & > img {
      opacity: 1;
      ${({ align }) =>
        align === 'left'
          ? css`
              transform: scale(1.25);
            `
          : css`
              transform: scale(1.25);
            `}
    }
    // 모달,이미지를 포함한 영역
    ${({ align }) =>
      align === 'left'
        ? css`
            transform: translateX(10%);
          `
        : css`
            transform: translateX(-10%);
          `}
  }
`
// 스크린을 좌우로 분리
const DividedArea = styled.div`
  ${FlexBetweenCSS};
  width: 100%;
  height: 90vh;
  background-color: ${({ theme }) => theme.COLOR.common.black};
  overflow: hidden;
`

export default GameMainPage
