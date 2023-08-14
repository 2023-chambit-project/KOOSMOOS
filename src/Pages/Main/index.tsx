import { useNavigate } from 'react-router';

export default function MainPage() {
  const navigate = useNavigate();

  return (
    <>
      <h1>KoosMoos</h1>
      <div>메인페이지 (홈)</div>

      <button onClick={()=> {navigate ("/MainPage");}}
      >홈</button>
      <button onClick={()=> {navigate ("/NewsPage");}}
      >뉴스</button>
      <button onClick={()=> {navigate ("/TechwikiPage");}}
      >테크위키</button>
      <button onClick={()=> {navigate ("/GamePage");}}
      >게임</button>
      <button onClick={()=> {navigate ("/GalleryPage");}}
      >갤러리</button>
      <button onClick={()=> {navigate ("/GoogleForm");}}
      >우주소식받기</button>

  </>
  )
}
