import { ROUTING_PATH } from '@/routes/path.constants'
import { theme } from '@/styles'

export const COMMON_TEXT = {
  buttonText: 'Explore More',
  InfoText: '프로그램 안내',
} as const

export const ALIGN_VALUE = {
  left: {
    titleText: 'Beyond Infinity',
    mainHeadingText: '빠른 클릭으로, 로켓을 운전해주세요.',
    imgSrc: 'assets/img/RocketLaunch.webp',
    identity: '캐주얼 게임',
    bodyTexts: [
      '전체 이용가 게임입니다.',
      '소요시간은 최대 2분입니다.',
      '비행 버튼을 빠르게 클릭하여, 로켓을 우주 끝까지 발사해 보세요.',
      '태양계 행성을 비롯한 다양한 천체를 감상할 수 있습니다.',
    ],
    mainColor: theme.PALETTE.blue[100],
    secondaryColor: theme.PALETTE.blue[70],
    to: ROUTING_PATH.game.launcher,
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
