import { ROUTING_PATH } from '@/routes/path.constants'
import { theme } from '@/styles'

// 게임-메인 페이지 관련 상수 관리

/** 공통 텍스트 */
export const COMMON_TEXT = {
  buttonText: 'Explore More',
  InfoText: '프로그램 안내',
} as const

/** 정렬 위치에 따라 다르게 사용하는 텍스트 및 속성값 */
export const ALIGN_VALUE = {
  left: {
    titleText: 'Hello, Artemis!',
    mainHeadingText: '오늘 만난 달님에게 인사해보세요!',
    imgSrc: 'assets/img/FlagMoon.svg',
    identity: 'Hello, Artemis ~!',
    bodyTexts: [
      '기분 좋은 인사말을 깃발에 적어주세요.',
      '"KOOSMOOS" 가 달 표면에 그 깃발을 꽂아 놓고 오겠습니다.!',
      '다른 사람들의 깃발을 구경해도 좋아요.',
      '모든 일은 달이 밝은 면에서만 가능합니다.',
      '오늘 어두워 보이는 곳도 한 달 안에는 분명 다시 밝아질 겁니다.!',
    ],
    mainColor: theme.PALETTE.yellow[100],
    secondaryColor: theme.PALETTE.yellow[70],
    to: '/game/1', // TODO: ROUTING_PATH에 추가 후 입력
  },
  right: {
    titleText: '내 마음속 행성',
    mainHeadingText: '내가 만약 행성이라면? 나는 무슨 행성일까요?',
    imgSrc: 'assets/img/CelestialBodies.svg',
    identity: '성격 유형 테스트',
    bodyTexts: [
      '검사 시간은 총 2-3분입니다.',
      '현재의 내면 심리와 유사한 특성을 가진 천체이미지를 출력해드립니다.',
      '검사 후 행성 이미지를 다운로드해서 소장해 보세요!',
      '우주를 테마로 한 12개의 질문이 준비되어 있습니다.',
    ],
    mainColor: theme.PALETTE.purple[100],
    secondaryColor: theme.PALETTE.purple[70],
    to: ROUTING_PATH.game.mbti,
  },
} as const
