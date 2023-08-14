import {BrowserRouter, Route, Routes} from 'react-router-dom';

import GalleryPage from '../Pages/Gallery';
import GamePage from '../Pages/Game';
import MainPage from '../Pages/Main';
import NewsPage from '../Pages/News';
import TechwikiPage from '../Pages/Tech-wiki';

export default function Router() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/news" element={<NewsPage/>}/>
        <Route path="/tech-wiki" element={<TechwikiPage/>}/>
        <Route path="/gallery" element={<GalleryPage/>}/>
        <Route path="/game/:category" element={<GamePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}