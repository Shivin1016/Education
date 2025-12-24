import React from 'react'
import Navbar from './components/Navbar' 
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Opportunities from './pages/Opportunities';
import Platform from './pages/Platform';
import Resources from './pages/Resources';
import PageNotFound from './pages/PageNotFound';


const App = () => {
  return (
    <div className=' bg-black text-gray-100 '>  
      <Navbar/> 
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/opportunities' element={<Opportunities/>}/>
        <Route path='/platform' element={<Platform/>}/>
        <Route path='/resources' element={<Resources/>}/>

        {/* page not found page*/}
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
