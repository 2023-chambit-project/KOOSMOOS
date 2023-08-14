import { useNavigate } from 'react-router';

export default function GalleryPage() {
    const navigate = useNavigate();

  return (
    <>
      <h1>갤러리</h1>
      <div>다양한 사진 정렬</div>
      
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