import './App.css';
import Header from './header/Header.jsx';
import Profile from './profile/Profile.jsx';

const App = () => {
  return (
    <div className="main-page">
      <Header />
      <div className="container">


        <Profile />
      </div>
    </div>
  );
}

export default App;
