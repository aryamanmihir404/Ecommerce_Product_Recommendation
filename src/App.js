import logo from './logo.svg';
import './App.css';
import React from 'react';
import { MusicalNoteIcon } from '@heroicons/react/24/outline';
import Nav from './components/Nav';
import Adv from './components/Adv';
import Body from './components/Body';

import Cart from './components/Cart';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  BrowserRouter,

  Link
} from "react-router-dom";


function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route exact path="/" element={<Body/>}/>
    <Route exact path="/Cart" element={<Cart/>}/>
   
   



   </Routes>
   
   </BrowserRouter>
   
   
   </>
  
    
     );
}

export default App;
