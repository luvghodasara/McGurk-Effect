import React, {useState} from 'react';
import Inputcomponent from './components/userInput';
import VideoPlayer from './components/videos';
import { createClient } from '@supabase/supabase-js';
import { useEffect } from 'react';
import Welcome from './pages/welcome.jsx';
import Testvideos from './pages/testvideos';
import Instructions from './pages/instructions';
import End from './pages/end';
import videos from './components/videos'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import mongoose from 'mongoose';






function App() {

  return (

    <div>
    <Router>
       <Routes>
         <Route path='/' element ={<Welcome />}/>
         <Route path='/instruction' element={<Instructions/>}/>
         <Route path='/videos' element={<Testvideos />}/>
         <Route path='/end' element={<End />}/>
         
       </Routes>
       

    </Router>

    </div>
  );
}


export default App;
