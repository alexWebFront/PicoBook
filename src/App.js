import './App.css';
import Header from '../src/components/header/Header';
import Profile from '../src/components/profile/profile-main-page/Profile';
import Footer from '../src/components/footer/Footer';
import Sidebar from '../src/components/sidebar/Sidebar';

const App = () => {
  return (
    <div className="main-page">
      <Header />
      <div className="container container-main">
        <Sidebar />
        <Profile />
      </div>
      <Footer />
    </div>
  );
}

export default App;
