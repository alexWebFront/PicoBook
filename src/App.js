import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import Header from '../src/components/header/Header';
import Profile from '../src/components/profile/Profile';
import Sidebar from '../src/components/sidebar/Sidebar';
import Music from './components/music/Music';
import Dialogs from './components/dialogs/Dialogs';
import News from './components/news/News';
import Video from './components/video/Video';
import Settings from './components/settings/Settings';

const App = (props) => {
  return <>
    <BrowserRouter>
      <Header />
      <div className="page">
        <div className="page__container">
          <div className='content page__content'>
            <Sidebar />
            <div className='content__main'>
              <Routes>
                <Route path='/profile/*' element={<Profile dispatch={props.dispatch} profilePage={props.state.profilePage} />} />
                <Route path='/dialogs/*' element={<Dialogs dispatch={props.dispatch} messagesPage={props.state.messagesPage} />} />
                <Route path='/news/*' element={<News />} />
                <Route path='/music/*' element={<Music />} />
                <Route path='/video/*' element={<Video />} />
                <Route path='/settings/*' element={<Settings />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter >
  </>
}
export default App;
