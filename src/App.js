import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Shop from './components/Shop';
import Blog from './components/Blog';
import LoginPage from './components/LoginPage';
import Appbar from './components/Appbar';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import CreateProfile from './components/CreateProfile';


function App() {
  return (
    <>
      <Appbar />      
      <Routes>
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/shop' element={<Shop />} />
        <Route exact path='/blog' element={<Blog />} />
        <Route exact path='/login' element={<LoginPage />} />
        <Route exact path='/signup' element={<SignUp />} />
        <Route exact path='/profile' element={<Profile />} />
        <Route exact path='/createprofile' element={<CreateProfile/>} />
      </Routes>
    </>
  );
}

export default App;
