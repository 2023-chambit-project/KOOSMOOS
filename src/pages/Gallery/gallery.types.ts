export interface Picture {
  imageUrl: string
  title: string
  links: { href: string }[]
}

export type MenuProps = '행성' | '우주' | '발사체' | '인공위성'
