// import type { FlagGame1Response } from '@/types'
// import MagnifiedMoonView from './components/ MagnifiedMoonView'

// const Game1Page = () => {
//   const response: FlagGame1Response = {
//     flagList: [
//       {
//         id: 1,
//         writer: 'John',
//         greeting: 'Hello, World!',
//         img_src: 'image1.jpg',
//       },
//       {
//         id: 2,
//         writer: 'Alice',
//         greeting: 'Hi there!',
//         img_src: 'image2.jpg',
//       },
//       {
//         id: 3,
//         writer: 'Bob',
//         greeting: 'Greetings from Bob!',
//         img_src: 'image3.jpg',
//       },
//     ],
//   }

//   return (
//     <div style={{ width: '100%', height: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//       <MagnifiedMoonView {...response}></MagnifiedMoonView>
//     </div>
//   )
// }
// export default Game1Page

/*

export interface FlagProp {
  id: number
  writer: string
  greeting: string
  img_src: string
}

export interface FlagGame1Response {
  flagList: FlagProp[]
}

*/
import { FlagGame1Response } from '@/types'
import MagnifiedMoonView from './components/ MagnifiedMoonView'
import InsideBarrel from './components/InsideBarrel'

const Game1Page = () => {
  const carouselList: FlagGame1Response = {
    flagList: [
      {
        id: 1,
        writer: 'John',
        greeting: 'Hello, World!',
        img_src:
          'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEwMDVfMjg2%2FMDAxNjY0OTQ5NzgwOTQ4.L6946cDquUgX-VmVqaLyIr6Su94m2Z5zTy4sDVob0B8g.lem0XiKzqDrWml_05D67a0Nn7f5DxMd_PK6nY2LCca4g.PNG.koone0801%2FKakaoTalk_20221005_144110235_01.png&type=a340',
      },
      {
        id: 2,
        writer: 'Alice',
        greeting: 'Hi there!',
        img_src:
          'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi3.ruliweb.com%2Fimg%2F23%2F09%2F06%2F18a66df0436496e82.jpg&type=a340',
      },
      {
        id: 3,
        writer: 'Bob',
        greeting: 'Greetings from Bob!',
        img_src:
          'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjExMTlfMjEy%2FMDAxNjY4ODQ4OTk0OTk1.KlA_CeF-n_8Csy0CqqgzuNnrgg7ixSPxfxC6muT1SNog.07-gNXBe-gzoOhIU73U2QXoEb4zrl334S-2jHF7WbGgg.JPEG.seadjk%2F%25C4%25B8%25C3%25B33.JPG&type=a340',
      },
    ],
  }
  return (
    <InsideBarrel>
      <MagnifiedMoonView flagList={carouselList.flagList} />
    </InsideBarrel>
  )
}
export default Game1Page
