import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import Header from '../src/components/header/Header';
import Profile from '../src/components/profile/profile-main-page/Profile';
import Footer from '../src/components/footer/Footer';
import Sidebar from '../src/components/sidebar/Sidebar';
import Music from './components/music/Music';
import Dialogs from './components/dialogs/Dialogs';
import News from './components/news/News';
import Video from './components/video/Video';
import Settings from './components/settings/Settings';


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="main-page page-container">
        <div className='main-flex'>
          <Sidebar />
          <div className='main-container'>
            <Routes>
              <Route path='/profile/*' element={<Profile />} />
              <Route path='/dialogs/*' element={<Dialogs />} />
              <Route path='/news/*' element={<News />} />
              <Route path='/music/*' element={<Music />} />
              <Route path='/video/*' element={<Video />} />
              <Route path='/settings/*' element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </BrowserRouter >
  );
};

export default App;
