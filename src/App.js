import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Shop from './components/Shop';
import Blog from './components/Blog';
import Appbar from './components/Appbar';

function App() {
  return (
    <>
    <Appbar/>
    <Routes>
      <Route exact path='/home' element = {<Home/>}/>
      <Route exact path='/shop' element = {<Shop/>}/>
      <Route exact path='/blog' element = {<Blog/>}/>
    </Routes>
    </>
  );
}

export default App;
