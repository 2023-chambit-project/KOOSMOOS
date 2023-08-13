import {BrowserRouter, Route, Routes} from 'react-router-dom';

import GalleryPage from './pages/GalleryPage';
import GamePage from './pages/GamePage';
import GoogleForm from './pages/GoogleForm';
import MainPage from './pages/MainPage';
import NewsPage from './pages/NewsPage';
import TechwikiPage from './pages/TechwikiPage';

export default function Router() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage/>}/>
        <Route path="/MainPage" element={<MainPage/>}/>
        <Route path="/NewsPage" element={<NewsPage/>}/>
        <Route path="/TechwikiPage" element={<TechwikiPage/>}/>
        <Route path="/GalleryPage" element={<GalleryPage/>}/>
        <Route path="/GamePage" element={<GamePage/>}/>
        <Route path="/GoogleForm" element={<GoogleForm/>}/>
      </Routes>
    </BrowserRouter>
  )
}