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
import TopPosts from './components/TopPosts';
import PrivateRoute from './components/PrivateRoute';
import UploadForm from './components/UploadForm';
import Alert from './components/Alert';
import { useState } from 'react';
//import Footer from './components/Footer';
import AuthContext from './context/authContext';
import DisplayPictureUpload from './components/DisplayPictureUpload';
import PostState from './context/posts/PostState';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [alert, setAlert] = useState(null)
  const showAlert = (message) => {
    setAlert({
      message: message
    })
  }
  return (
    <>
      <PostState>
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
          <Appbar />
          <Alert alert={alert} />
          <Routes>
            <Route exact path='/' element={<TopPosts />}></Route>
            <Route element={<PrivateRoute />}>
              <Route exact path='/home' element={<Home />} />
              <Route exact path='/shop' element={<Shop />} />
              <Route exact path='/blog' element={<Blog />} />
              <Route exact path='/uploadform' element={<UploadForm />} />
              <Route exact path='/profile' element={<Profile />} />
            </Route>
            <Route exact path='/login' element={<LoginPage showAlert={showAlert} />} />
            <Route exact path='/signup' element={<SignUp showAlert={showAlert} />} />
            <Route exact path='/createprofile' element={<CreateProfile />} />
            <Route exact path='/displaypicture' element={<DisplayPictureUpload />} />
          </Routes>
        </AuthContext.Provider>
      </PostState>
    </>
  );
}

export default App;
