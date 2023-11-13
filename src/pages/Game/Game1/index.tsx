import { flagListAtom } from '@/atoms/flagList.atom'
import { moonShapeAtom } from '@/atoms/moonShape.atom'
import { viewTypeAtom } from '@/atoms/viewType.atom'
import type { FlagGame1Response, MoonProp } from '@/types'
import { useEffect } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { createFlagTemplate } from './Game1.constants'
import type { ViewTypeProp } from './Game1.types'
import { GeneralMoonView, MagnifiedMoonView, SidePanel } from './components'

const Game1Page = () => {
  const flagList = useSetRecoilState(flagListAtom)
  const moonShape = useSetRecoilState<MoonProp>(moonShapeAtom)

  useEffect(() => {
    const fetchDataFromServer = async () => {
      try {
        const response: FlagGame1Response = {
          moonShape: 'waningGibbous',
          flagList: [
            {
              id: 1,
              writer: 'John',
              greeting: 'Hello, World!',
              img_src:
                'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEwMDVfMjg2%2FMDAxNjY0OTQ5NzgwOTQ4.L6946cDquUgX-VmVqaLyIr6Su94m2Z5zTy4sDVob0B8g.lem0XiKzqDrWml_05D67a0Nn7f5DxMd_PK6nY2LCca4g.PNG.koone0801%2FKakaoTalk_20221005_144110235_01.png&type=a340',
              posX: -70,
              posY: -20,
            },
            {
              id: 2,
              writer: 'Alice',
              greeting: 'Hi there!',
              img_src:
                'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi3.ruliweb.com%2Fimg%2F23%2F09%2F06%2F18a66df0436496e82.jpg&type=a340',
              posX: -30,
              posY: 50,
            },
            {
              id: 3,
              writer: 'Bob',
              greeting: 'Greetings from Bob!',
              img_src:
                'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjExMTlfMjEy%2FMDAxNjY4ODQ4OTk0OTk1.KlA_CeF-n_8Csy0CqqgzuNnrgg7ixSPxfxC6muT1SNog.07-gNXBe-gzoOhIU73U2QXoEb4zrl334S-2jHF7WbGgg.JPEG.seadjk%2F%25C4%25B8%25C3%25B33.JPG&type=a340',
              posX: 23,
              posY: 0,
            },
            {
              id: 4,
              writer: '이윤신',
              greeting: 'test',
              img_src:
                'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjExMTlfMjEy%2FMDAxNjY4ODQ4OTk0OTk1.KlA_CeF-n_8Csy0CqqgzuNnrgg7ixSPxfxC6muT1SNog.07-gNXBe-gzoOhIU73U2QXoEb4zrl334S-2jHF7WbGgg.JPEG.seadjk%2F%25C4%25B8%25C3%25B33.JPG&type=a340',
              posX: -80,
              posY: -0.5,
            },
            {
              id: 5,
              writer: 'Bob',
              greeting: 'Greetings from Bob!',
              img_src:
                'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjExMTlfMjEy%2FMDAxNjY4ODQ4OTk0OTk1.KlA_CeF-n_8Csy0CqqgzuNnrgg7ixSPxfxC6muT1SNog.07-gNXBe-gzoOhIU73U2QXoEb4zrl334S-2jHF7WbGgg.JPEG.seadjk%2F%25C4%25B8%25C3%25B33.JPG&type=a340',
              posX: -3.5,
              posY: 60.9,
            },
            {
              id: 6,
              writer: '김성용',
              greeting: 'test',
              img_src:
                'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjExMTlfMjEy%2FMDAxNjY4ODQ4OTk0OTk1.KlA_CeF-n_8Csy0CqqgzuNnrgg7ixSPxfxC6muT1SNog.07-gNXBe-gzoOhIU73U2QXoEb4zrl334S-2jHF7WbGgg.JPEG.seadjk%2F%25C4%25B8%25C3%25B33.JPG&type=a340',
              posX: -30.5,
              posY: -1.2,
            },
            {
              id: 7,
              writer: '테스트이름',
              greeting: 'Hello, World!',
              img_src:
                'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEwMDVfMjg2%2FMDAxNjY0OTQ5NzgwOTQ4.L6946cDquUgX-VmVqaLyIr6Su94m2Z5zTy4sDVob0B8g.lem0XiKzqDrWml_05D67a0Nn7f5DxMd_PK6nY2LCca4g.PNG.koone0801%2FKakaoTalk_20221005_144110235_01.png&type=a340',
              posX: -50,
              posY: -50,
            },
            {
              id: 8,
              writer: '난 뭐야?',
              greeting: 'Hi there!',
              img_src:
                'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi3.ruliweb.com%2Fimg%2F23%2F09%2F06%2F18a66df0436496e82.jpg&type=a340',
              posX: -30,
              posY: 50.5,
            },
            {
              id: 9,
              writer: '이름',
              greeting: 'Greetings from Bob!',
              img_src:
                'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjExMTlfMjEy%2FMDAxNjY4ODQ4OTk0OTk1.KlA_CeF-n_8Csy0CqqgzuNnrgg7ixSPxfxC6muT1SNog.07-gNXBe-gzoOhIU73U2QXoEb4zrl334S-2jHF7WbGgg.JPEG.seadjk%2F%25C4%25B8%25C3%25B33.JPG&type=a340',
              posX: 23,
              posY: -40.5,
            },
            {
              id: 10,
              writer: '선비',
              greeting: 'test',
              img_src:
                'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjExMTlfMjEy%2FMDAxNjY4ODQ4OTk0OTk1.KlA_CeF-n_8Csy0CqqgzuNnrgg7ixSPxfxC6muT1SNog.07-gNXBe-gzoOhIU73U2QXoEb4zrl334S-2jHF7WbGgg.JPEG.seadjk%2F%25C4%25B8%25C3%25B33.JPG&type=a340',
              posX: 0,
              posY: -88,
            },
            {
              id: 11,
              writer: '오랑캐',
              greeting: 'Greetings from Bob!',
              img_src:
                'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjExMTlfMjEy%2FMDAxNjY4ODQ4OTk0OTk1.KlA_CeF-n_8Csy0CqqgzuNnrgg7ixSPxfxC6muT1SNog.07-gNXBe-gzoOhIU73U2QXoEb4zrl334S-2jHF7WbGgg.JPEG.seadjk%2F%25C4%25B8%25C3%25B33.JPG&type=a340',
              posX: 13,
              posY: -20,
            },
            {
              id: 12,
              writer: '아리스토텔레스',
              greeting: 'test',
              img_src:
                'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjExMTlfMjEy%2FMDAxNjY4ODQ4OTk0OTk1.KlA_CeF-n_8Csy0CqqgzuNnrgg7ixSPxfxC6muT1SNog.07-gNXBe-gzoOhIU73U2QXoEb4zrl334S-2jHF7WbGgg.JPEG.seadjk%2F%25C4%25B8%25C3%25B33.JPG&type=a340',
              posX: 0,
              posY: 90,
            },
          ],
        }
        /** moonShape, Recoil State 에 등록 */
        moonShape(response.moonShape)

        /** flagList, Recoil State 에 등록 */
        const getFlagList = response.flagList
        getFlagList.unshift(createFlagTemplate) // 인덱스 0 번은 깃발 생성용 객체로 지정
        flagList(getFlagList)
      } catch (error) {
        console.error('서버에서 데이터를 가져오는 중 에러 발생:', error)
      }
    }
    fetchDataFromServer()
  }, [flagList, moonShape])

  const [viewType] = useRecoilState<ViewTypeProp>(viewTypeAtom)

  return (
    <>
      {viewType == 'general' ? <GeneralMoonView /> : <MagnifiedMoonView />}
      <SidePanel />
    </>
  )
}

export default Game1Page
