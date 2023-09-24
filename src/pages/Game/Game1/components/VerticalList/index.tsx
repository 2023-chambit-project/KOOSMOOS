import { Button } from '@/components'
import { Icon } from '@/components/Icon'
import { faChevronRight, faExclamationCircle, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import * as S from './VerticalList.styles'
import ENFJ from '/public/assets/game/resultPaper/ENFP.png'

const message = new Array(20).fill(0).map((_, idx) => [idx, idx + ' 번째 인삿말입니다.'])
const VerticalList = () => {
  return (
    <S.Container>
      <S.HeadingText>
        # 오늘 밤은 <S.PointText>보름달</S.PointText> 입니다!
      </S.HeadingText>
      <S.Divider />
      <S.GreetingListContainer>
        {message.map((val) => (
          <S.GreetingItem>
            <S.UsersProfileImg src={ENFJ} />
            <S.UsersTextWrapper>
              <S.UsersNicknameText>{val[0]}</S.UsersNicknameText>
              <S.UsersGreetingText>{val[1]}</S.UsersGreetingText>
            </S.UsersTextWrapper>
            <Icon icon={faMagnifyingGlass} />
          </S.GreetingItem>
        ))}
      </S.GreetingListContainer>
      <S.Divider />
      <Button icon={faChevronRight}>참여하기</Button>
      <S.TrivialInfoContainer>
        <S.TrivialInfoInfoHeading>
          <Icon icon={faExclamationCircle} />
          그거 아시나요?
        </S.TrivialInfoInfoHeading>
        <S.TrivialInfoInfoBody>
          아리랑 아리랑 아라리요 아리랑고개를 넘어간다. 나를 버리고 가시는 님은 십리도 못가서 발병난다. 아리랑 아리랑
          아라리요 아리랑 고개고개로 넘어간다.
        </S.TrivialInfoInfoBody>
      </S.TrivialInfoContainer>
    </S.Container>
  )
}

export default VerticalList
