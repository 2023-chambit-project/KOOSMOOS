import { TechWikiPostProps, TechWikiPostSummaryProps } from '@/types/techWiki'

export const techWikiPostsSummary: TechWikiPostSummaryProps[] = [
  {
    id: '1',
    thumbnail: `/assets/tech-wiki/list-thumbnail/thumbnail1.png`,
    title: '1번 포스트입니다.',
    description:
      '천체를 관측해요 천체를 관측해요 천체를 관측해요 천체를 관측해요. 천체를 관측해요 천체를 관측해요 천체를 관측해요',
    date: '2023-09-15',
  },
  {
    id: '2',
    thumbnail: `/assets/tech-wiki/list-thumbnail/thumbnail2.png`,
    title: '2번 포스트입니다.',
    description:
      '천체를 관측해요 천체를 관측해요 천체를 관측해요 천체를 관측해요. 천체를 관측해요 천체를 관측해요 천체를 관측해요',
    date: '2023-09-14',
  },
  {
    id: '3',
    thumbnail: `/assets/tech-wiki/list-thumbnail/thumbnail1.png`,
    title: '3번 포스트입니다.',
    description:
      '천체를 관측해요 천체를 관측해요 천체를 관측해요 천체를 관측해요. 천체를 관측해요 천체를 관측해요 천체를 관측해요',
    date: '2023-09-15',
  },
  {
    id: '4',
    thumbnail: `/assets/tech-wiki/list-thumbnail/thumbnail2.png`,
    title: '4번 포스트입니다.',
    description:
      '천체를 관측해요 천체를 관측해요 천체를 관측해요 천체를 관측해요. 천체를 관측해요 천체를 관측해요 천체를 관측해요',
    date: '2023-09-14',
  },
]

export const TechWikiPosts: TechWikiPostProps[] = [
  {
    id: '1',
    title: '1번 포스트입니다.',
    thumbnail: `/assets/tech-wiki/post-thumbnail/thumbnail1.png`,
    date: '2023-09-11',
    writer: {
      nickname: 'TransparentDeveloper',
      profile_img: 'https://avatars.githubusercontent.com/u/50646145?v=4',
    },
    content: `
        안녕하세요. 팀 LOSS의 TransparentDeveloper입니다.

        ### 우주 관측하시는 걸 좋아하시나요?

        <img src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb2rbPt%2Fbtqy0FJgja1%2FgBn90IqzhQj3wT1axgAiiK%2Fimg.jpg" />

        __참 이쁘죠?__
    `,
  },
  {
    id: '2',
    title: '2번 포스트입니다.',
    thumbnail: `/assets/tech-wiki/post-thumbnail/thumbnail1.png`,
    date: '2023-09-12',
    writer: {
      nickname: 'Doeunnkimm',
      profile_img: 'https://avatars.githubusercontent.com/u/112946860?v=4',
    },
    content: `
        안녕하세요. 팀 LOSS의 Doeunnkimm입니다.

        ### 우리 가까운 곳에 있는 학교에서 별 보기를 시도해보세요!.

        <img src="https://www.kw.ac.kr/KWData/webeditor/2020/2020_05_29_102245.jpg" />

        **하늘을 바라봅시다! 🌛**
    `,
  },
  {
    id: '3',
    title: '3번 포스트입니다.',
    thumbnail: `/assets/tech-wiki/post-thumbnail/thumbnail1.png`,
    date: '2023-09-13',
    writer: {
      nickname: 'smilevictory',
      profile_img: 'https://avatars.githubusercontent.com/u/113532580?v=4',
    },
    content: `
        안녕하세요. 팀 LOSS의 smilevictory입니다!

        ### 유명한 별 보기 좋은 곳을 소개해 드립니다 :)

        <img src="https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/e039d050-bab4-4beb-ac63-ad1356605326.jpeg" />

        **자세한 위치는 아래에서 소개해 드리겠습니다!**
    `,
  },
  {
    id: '4',
    title: '4번 포스트입니다.',
    thumbnail: `/assets/tech-wiki/post-thumbnail/thumbnail1.png`,
    date: '2023-09-13',
    writer: {
      nickname: 'smilevictory',
      profile_img: 'https://avatars.githubusercontent.com/u/113532580?v=4',
    },
    content: `
        안녕하세요. 팀 LOSS의 smilevictory입니다!

        ### 이건 4번 포스팅입니다 !!

        <img src="https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/e039d050-bab4-4beb-ac63-ad1356605326.jpeg" />

       **좋은 글을 소개해 드리고 있으니 다른 포스팅도 살펴보세요!**
    `,
  },
]
