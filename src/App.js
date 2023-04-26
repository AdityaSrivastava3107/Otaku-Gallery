import { Route, Routes } from 'react-router-dom';
import './App.css';
import ResponsiveAppBar from './components/Navbar';
import Home from './components/Home';
import Shop from './components/Shop';
import Blog from './components/Blog';

function App() {
  return (
    <>
    <ResponsiveAppBar/>
    <Routes>
      <Route exact path='/home' element = {<Home/>}/>
      <Route exact path='/shop' element = {<Shop/>}/>
      <Route exact path='/blog' element = {<Blog/>}/>
    </Routes>
    </>
  );
}

export default App;
